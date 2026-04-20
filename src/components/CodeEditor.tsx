import React, { useState, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, keymap, lineNumbers, highlightActiveLineGutter, highlightSpecialChars, drawSelection, dropCursor, rectangularSelection, crosshairCursor, highlightActiveLine, placeholder } from '@codemirror/view';
import { python } from '@codemirror/lang-python';
import { oneDark } from '@codemirror/theme-one-dark';
import { defaultKeymap, history, historyKeymap } from '@codemirror/commands';

interface CodeEditorProps {
  initialCode?: string;
  onCodeChange?: (code: string) => void;
  onRunCode?: (code: string) => void;
  output?: string;
  error?: string;
  readOnly?: boolean;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode = '',
  onCodeChange,
  onRunCode,
  output = '',
  error = '',
  readOnly = false
}) => {
  const [code, setCode] = useState(initialCode);
  const editorRef = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);

  useEffect(() => {
    if (!editorRef.current) return;

    const startState = EditorState.create({
      doc: code,
      extensions: [
        lineNumbers(),
        highlightActiveLineGutter(),
        highlightSpecialChars(),
        drawSelection(),
        dropCursor(),
        rectangularSelection(),
        crosshairCursor(),
        highlightActiveLine(),
        history(),
        python(),
        oneDark,
        keymap.of([...defaultKeymap, ...historyKeymap]),
        placeholder('在此输入Python代码...'),
        EditorView.updateListener.of(update => {
          if (update.docChanged) {
            const newCode = update.state.doc.toString();
            setCode(newCode);
            onCodeChange?.(newCode);
          }
        }),
        EditorState.readOnly.of(readOnly)
      ]
    });

    const view = new EditorView({
      state: startState,
      parent: editorRef.current
    });

    viewRef.current = view;

    return () => {
      view.destroy();
    };
  }, [code, readOnly, onCodeChange]);

  const handleRunCode = () => {
    onRunCode?.(code);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-700">代码编辑器</h3>
        <button
          onClick={handleRunCode}
          className="bg-[#4A6FA5] hover:bg-[#3A5A85] text-white font-medium py-2 px-4 rounded-lg transition duration-300 flex items-center"
        >
          运行代码
        </button>
      </div>
      <div
        ref={editorRef}
        className="border rounded-lg overflow-hidden h-64"
      />
      {output && (
        <div className="mt-4 p-4 bg-gray-50 border rounded-lg">
          <h4 className="font-medium text-gray-700 mb-2">输出结果：</h4>
          <pre className="whitespace-pre-wrap text-gray-800">{output}</pre>
        </div>
      )}
      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <h4 className="font-medium text-red-700 mb-2">错误信息：</h4>
          <pre className="whitespace-pre-wrap text-red-800">{error}</pre>
        </div>
      )}
    </div>
  );
};

export default CodeEditor;