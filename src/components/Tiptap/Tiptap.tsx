import { EditorContent, useEditor } from '@tiptap/react';
import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import { AiOutlineEnter, AiOutlineFontColors } from 'react-icons/ai';
import {
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaEraser,
  FaFileCode,
  FaHeading,
  FaHighlighter,
  FaItalic,
  FaListOl,
  FaListUl,
  FaPaintRoller,
  FaQuoteLeft,
  FaRedo,
  FaRemoveFormat,
  FaRulerHorizontal,
  FaStrikethrough,
  FaUnderline,
  FaUndo,
} from 'react-icons/fa';

import './Tiptap.css';

// @ts-ignore
const MenuBar = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className='py-2 px-4 flex items-center justify-between'>
      <div>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('bold') ? 'is-active' : ''}`}
        >
          <FaBold />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('italic') ? 'is-active' : ''}`}
        >
          <FaItalic />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          disabled={!editor.can().chain().focus().toggleUnderline().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('underline') ? 'is-active' : ''}`}
        >
          <FaUnderline />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('strike') ? 'is-active' : ''}`}
        >
          <FaStrikethrough />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('code') ? 'is-active' : ''}`}
        >
          <FaCode />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className='text-lg m-2 mr-4 '
        >
          <FaRemoveFormat />
        </button>
        <button type='button' onClick={() => editor.chain().focus().clearNodes().run()} className='text-lg m-2 mr-4 '>
          <FaEraser />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}`}
        >
          <div className='flex items-center'>
            <FaHeading />
            <span className='font-bold text-lg'>1</span>
          </div>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}`}
        >
          <div className='flex items-center'>
            <FaHeading />
            <span className='font-bold text-lg'>2</span>
          </div>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}`}
        >
          <div className='flex items-center'>
            <FaHeading />
            <span className='font-bold text-lg'>3</span>
          </div>
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().setColor('#66cc8a').run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('textStyle', { color: '#66cc8a' }) ? 'is-active' : ''}`}
        >
          <span className='font-bold text-lg'>
            <AiOutlineFontColors />
          </span>
        </button>
        <label htmlFor='paint' className='inline-block cursor-pointer  mr-4'>
          <FaPaintRoller />
        </label>
        <input
          type='color'
          id='paint'
          className='invisible w-0'
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            editor.chain().focus().setColor(event.target.value).run()
          }
          value={editor.getAttributes('textStyle').color}
        />
        <label htmlFor='highlight' className='inline-block cursor-pointer  mr-4'>
          <FaHighlighter />
        </label>
        <input
          type='color'
          id='highlight'
          className='invisible w-0'
          onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
            editor.chain().focus().toggleHighlight({ color: event.target.value }).run()
          }
          value={editor.getAttributes('textStyle').color}
        />
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('bulletList') ? 'is-active' : ''}`}
        >
          <FaListUl />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('orderedList') ? 'is-active' : ''}`}
        >
          <FaListOl />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={`text-lg m-2 mr-4 ${editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}`}
        >
          <FaAlignLeft />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={`text-lg m-2 mr-4 ${editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}`}
        >
          <FaAlignCenter />
        </button>
        <button
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={`text-lg m-2 mr-4 ${editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}`}
        >
          <FaAlignRight />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('codeBlock') ? 'is-active' : ''}`}
        >
          <FaFileCode />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`text-lg m-2 mr-4 ${editor.isActive('blockquote') ? 'is-active' : ''}`}
        >
          <FaQuoteLeft />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className='text-lg m-2 mr-4 '
        >
          <FaRulerHorizontal />
        </button>
        <button type='button' onClick={() => editor.chain().focus().setHardBreak().run()} className='text-lg m-2 mr-4 '>
          <span className='font-bold text-lg'>
            <AiOutlineEnter />
          </span>
        </button>
      </div>

      <div className=''>
        <button
          type='button'
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className='text-lg m-2 mr-4 '
        >
          <FaUndo />
        </button>
        <button
          type='button'
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className='text-lg m-2 mr-4 '
        >
          <FaRedo />
        </button>
      </div>
    </div>
  );
};

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      // @ts-ignore
      TextStyle.configure({ types: [ListItem.name] }),
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
        alignments: ['left', 'right', 'center'],
      }),
      Underline,
    ],
    content: ``,
    onUpdate: ({ editor }) => {
      // IMPORTANT  HERE  we get the input which we can store in the backend to be able to show the data again as we sent in front
      // we can get it in different formats ex: json or HTML or ...
      // NOTE  we might need a package to parse the html in react or search for a way, IMPORTANT  adding the ProseMirror class to the output
      const html = editor.getHTML();
      console.log(html);
    },
  });

  return (
    <div className='text-editor border border-neutral rounded w-3/4 mb-10 m-auto'>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
};

export default Tiptap;
