export const defaultEditorState = `
## ð² md-editor-rt 

Markdown ç¼è¾å¨,React çæ¬,ä½¿ç¨ jsx å typescript è¯­æ³å¼å,æ¯æåæ¢ä¸»é¢ãprettier ç¾åææ¬ç­ã

### ð¤ åºæ¬æ¼ç¤º

**å ç²**,<u>ä¸åçº¿</u>,_æä½_,~å é¤çº¿~,ä¸æ <sup>26</sup>ï¼ä¸æ <sub>[1]</sub>,\`inline code\`,[è¶é¾æ¥](https://imzbf.cc)

> å¼ç¨ï¼ä¸çä¸æ²¡æç»å¯¹,åªæç¸å¯¹
## ð¤ ä»£ç æ¼ç¤º

\`\`\`js
import { defineComponent, ref } from 'vue';
import MdEditor from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

export default defineComponent({
  name: 'MdEditor',
  setup() {
    const text = ref('');
    return () => (
      <MdEditor modelValue={text.value} onChange={(v: string) => (text.value = v)} />
    );
  }
});
\`\`\`

## ð¨ ææ¬æ¼ç¤º
ä¾ç§æ®æåé¿åº¦è¿é¡¹åä½ï¼ç®åå¯è§æµçå®å®çç´å¾ä¼°è®¡å¼ï¼ç´å¾çº¦ 930 äº¿åå¹´ï¼å³ 8.8 Ã 10<sup>26</sup> ç±³ï¼å³ä¸º 5.4 Ã 10<sup>61</sup>åæ®æåé¿åº¦ãèå¯è§æµå®å®ä½ç§¯åä¸º 8.4 Ã 10<sup>184</sup>ç«æ¹æ®æåé¿åº¦ï¼æ®æåä½ç§¯ï¼ã

## ð è¡¨æ ¼æ¼ç¤º

| æµç§° | æ¥èª      |
| ---- | --------- |
| ä¹é´ | ä¸­å½-éåº |

## ð å¬å¼

è¡åï¼$x+y^{2x}$

$$
\\sqrt[3]{x}
$$

## ð§¬ å¾è¡¨

\`\`\`mermaid
flowchart TD
  Start --> Stop
\`\`\`

## âï¸ å ä¸ªå@ï¼
`