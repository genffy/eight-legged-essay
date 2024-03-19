import React, { useEffect, useState } from 'react';
import { initEditor } from '../editor/editor';
import { AffineEditorContainer, EdgelessEditor } from '@blocksuite/presets';
import { DocCollection } from '@blocksuite/store';
import { Provider } from '../editor/provider/provider';
import { EditorContext } from '../editor/context';

export const EditorProvider = ({ children, mode='default' }: { children: React.ReactNode, mode?: string }) => {
  const [editor, setEditor] = useState<AffineEditorContainer | EdgelessEditor | null>(null);
  const [collection, setCollection] = useState<DocCollection | null>(null);
  const [provider, setProvider] = useState<Provider | null>(null);
  const updateCollection = (newCollection: DocCollection) => {
    setCollection(newCollection);
  };

  useEffect(() => {
    initEditor(mode).then(({ editor, collection, provider }) => {
      setEditor(editor);
      setCollection(collection);
      setProvider(provider);
    });
  }, []);

  return (
    <EditorContext.Provider
      value={{
        editor,
        collection,
        provider,
        updateCollection,
        mode,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
