import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

interface CustomEditorProps {
  initialValue?: string;
  onChange: (content: string) => void;
}

const CustomEditor: React.FC<CustomEditorProps> = ({ initialValue = '', onChange }) => {
  return (
    <Editor
      apiKey="z52mokq9tyg8k35z8vdgyc5hdaz7ucl7g7g80edm936q8809"
      initialValue={initialValue}
      init={{
        height: 600,
        menubar: true,
        readonly: false,
        plugins: [
          'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
          'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
          'insertdatetime', 'media', 'table', 'help', 'wordcount',
          'emoticons', 'template', 'codesample'
        ],
        toolbar: 'undo redo | blocks | ' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | image media link | help',
        content_style: `
          body { 
            font-family: Inter, Arial, sans-serif; 
            font-size: 16px; 
            line-height: 1.6;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
          }
          img { 
            max-width: 100%; 
            height: auto; 
            border-radius: 8px;
          }
          p { margin: 1rem 0; }
          h1, h2, h3, h4, h5, h6 { 
            margin: 2rem 0 1rem;
            line-height: 1.2;
          }
          ul, ol { 
            margin: 1rem 0;
            padding-left: 2rem;
          }
          blockquote {
            margin: 1rem 0;
            padding: 1rem;
            border-left: 4px solid #e2e8f0;
            background: #f8fafc;
          }
          code {
            background: #f1f5f9;
            padding: 0.2em 0.4em;
            border-radius: 3px;
            font-size: 0.9em;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            margin: 1rem 0;
          }
          th, td {
            border: 1px solid #e2e8f0;
            padding: 0.75rem;
          }
          th {
            background: #f8fafc;
          }
        `,
        formats: {
          alignleft: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'text-left' },
          aligncenter: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'text-center' },
          alignright: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'text-right' },
          alignjustify: { selector: 'p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li,table,img', classes: 'text-justify' }
        },
        images_upload_handler: async (blobInfo) => {
          // Here you would typically upload to your storage and return the URL
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result as string);
            reader.readAsDataURL(blobInfo.blob());
          });
        },
        file_picker_types: 'image',
        automatic_uploads: true,
        images_reuse_filename: true,
        paste_data_images: true,
        paste_as_text: false,
        paste_word_valid_elements: "p,b,strong,i,em,h1,h2,h3,h4,h5,h6,ul,ol,li,a[href],span,table,tr,td,th,thead,tbody,img[src],blockquote,code",
        paste_webkit_styles: "all",
        paste_merge_formats: true,
        paste_convert_word_fake_lists: true,
        object_resizing: true,
        resize: false,
        branding: false,
        promotion: false,
        elementpath: true
      }}
      onEditorChange={onChange}
    />
  );
};

export default CustomEditor;