import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const [content, setContent] = useState("");

  const handleEditorChange = (content: any, editor: any) => {
    setContent(content);
  };

  return (
    <div>
      <Editor
        apiKey="tvazhq6h0y7bnal9iovhz2x3g6pz1hy8austlwb9a1495y1f"
        value={content}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "code",
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks fullscreen",
            "insertdatetime media table paste code help wordcount",
          ],
          toolbar:
            "undo redo | formats | bold italic underline strikethrough | code" +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist outdent indent | link image | code",

          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
        onEditorChange={handleEditorChange}
      />
      <div>
        <h2>Editor Content</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
