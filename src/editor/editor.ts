import { AffineEditorContainer, EdgelessEditor, createEmptyDoc } from '@blocksuite/presets';
import { Provider } from './provider/provider';
import { Doc } from '@blocksuite/store';
import '@blocksuite/presets/themes/affine.css';

export async function initEditor(mode: string) {
  const provider = await Provider.init();
  await provider.connect();

  const { collection: collection } = provider;
  let doc: Doc | null = null;

  collection.docs.forEach(d => {
    doc = doc ?? d;
  });
  if (!doc) {
    doc = createEmptyDoc().init();
    // throw Error('doc not found');
    console.error('doc not found')
  }
  let editor: AffineEditorContainer | EdgelessEditor | null = null;
  console.log('initEditor mode', mode)
  if(mode === 'edgeless'){
    editor = new EdgelessEditor();
    editor.doc = doc;
  } else if(mode === 'default') {
    editor = new AffineEditorContainer();
    editor.doc = doc;
    (editor as AffineEditorContainer).slots.docLinkClicked.on(({ docId }) => {
      const target = <Doc>collection.getDoc(docId);
      // @ts-ignore
      editor.doc = target;
    });
  }

  return { editor, provider, collection, mode };
}
