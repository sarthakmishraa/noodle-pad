"use client";

import { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";

export const TipTap = () => {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
            heading: {
                levels: [1, 2, 3]
            }}),
            Placeholder.configure({
                placeholder: "Write in your Noodle Doc..."
            }),
            Highlight.configure({ multicolor: false }),
            TextAlign.configure({
                types: ["heading", "paragraph"]
            }),
        ],
        content: typeof window !== "undefined" ? localStorage.getItem("content") : "<p>Start writing in your Noodle Pad...</p>",
        onUpdate() {
            localStorage.setItem("content", editor?.getHTML() || "");
        }
    });

    const setNormal = () => {
        editor?.chain().focus().setParagraph().run();
    };
    const setBold = () => {
        editor?.chain().focus().toggleBold().run();
    };
    const setHeading1 = () => {
        editor?.chain().focus().toggleHeading({ level: 1 }).run();
    };
    const setHeading2 = () => {
        editor?.chain().focus().toggleHeading({ level: 2 }).run();
    };
    const setHeading3 = () => {
        editor?.chain().focus().toggleHeading({ level: 3 }).run();
    };
    const setItalic = () => {
        editor?.chain().focus().toggleItalic().run();
    };
    const setCode = () => {
        editor?.chain().focus().toggleCode().run();
    };
    const setStrike = () => {
        editor?.chain().focus().toggleStrike().run();
    };
    const setUnorderedList = () => {
        editor?.chain().focus().toggleBulletList().run();
    };
    const setOrderedList = () => {
        editor?.chain().focus().toggleOrderedList().run();
    };
    const setHighlight = () => {
        editor?.commands.setHighlight();
    };
    const unSetHighlight = () => {
        editor?.commands.unsetHighlight();
    };
    const setTextAlignType = (alignType: string) => {
        editor?.chain().focus().setTextAlign(alignType).run();
    }

    useEffect(() => {
        editor?.commands.focus("end");
    }, [editor]);

    return(
        <div className="editor">
            <div className="editorTools">
                <p>ToolBox</p>
                <button onClick={setNormal}>Plain</button>
                <button onClick={setBold}>Bold</button>
                <button onClick={setHeading1}>H1</button>
                <button onClick={setHeading2}>H2</button>
                <button onClick={setHeading3}>H3</button>
                <button onClick={setItalic}>Italic</button>
                <button onClick={setCode}>Code</button>
                <button onClick={setStrike}>Strike</button>
                <button onClick={setUnorderedList}>Bullet List</button>
                <button onClick={setOrderedList}>Numbered List</button>
                <button onClick={setHighlight}>Highlight</button>
                <button onClick={unSetHighlight}>Highlight off</button>
                <button onClick={() => setTextAlignType("left")}>Text Left</button>
                <button onClick={() => setTextAlignType("center")}>Text Center</button>
                <button onClick={() => setTextAlignType("right")}>Text Right</button>
                <button onClick={() => setTextAlignType("justify")}>Text Justify</button>
            </div>
            <div className="editorArea">
                <EditorContent className="editorAreaText" editor={editor} />
            </div>
        </div>
    )
}