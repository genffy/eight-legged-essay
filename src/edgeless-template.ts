import { builtInTemplates } from './assets/edgeless-templates.gen';
import {
  EdgelessTemplatePanel,
  type TemplateManager,
} from '@blocksuite/blocks';

EdgelessTemplatePanel.templates.extend(builtInTemplates as TemplateManager);
