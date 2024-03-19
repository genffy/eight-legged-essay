import { AffineEditorContainer, EdgelessEditor } from '@blocksuite/presets';
import { DocCollection } from '@blocksuite/store';
import { createContext, useContext } from 'react';
import { Provider } from './provider/provider';

export interface EditorContextType {
  editor: AffineEditorContainer | EdgelessEditor | null;
  collection: DocCollection | null;
  provider: Provider | null;
  updateCollection: (newCollection: DocCollection) => void;
  mode: string;
}

export const EditorContext = createContext<EditorContextType | null>(null);

export function useEditor() {
  return useContext(EditorContext);
}
