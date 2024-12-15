import {promises as fs} from 'fs';
import { uid } from 'uid';
import { loremIpsum } from "lorem-ipsum";
import { uniqueNamesGenerator, names } from 'unique-names-generator';

// IMPORTANT: run with npx tsx .\src\assets\mock\generate.ts

const allTYpes = ['AGREE_OR_ELSE', 'OUT_OF_FIVE', 'OPEN_ENDED'];

(
  async () => {
    const answers = [
      ...Array(1000)].map(() => {
        // "~~" for a closest "int"
        const randomType = allTYpes[~~(allTYpes.length * Math.random())];

        return {
          id: uid(),
          type: randomType,
          title: loremIpsum({sentenceUpperBound: 5}),
          description: loremIpsum({sentenceUpperBound: 7}),
          user: uniqueNamesGenerator({
            dictionaries: [names]
          }),
          answer: randomType == 'OPEN_ENDED'
            ? loremIpsum({sentenceUpperBound: 10}) : undefined,
          mark: randomType == 'AGREE_OR_ELSE'
            ? Math.random() < 0.5
            :  randomType == 'OUT_OF_FIVE'
              ? Math.floor(Math.random() * 5)
              : undefined,
          completedAt: new Date(
            new Date('2024-06-01').getTime() + Math.random() *
            (new Date('2024-12-01').getTime() - new Date('2024-06-01').getTime())),
        }
      }
    )
    await fs.writeFile('./src/assets/mock/data.json', JSON.stringify(answers));
  }
)()
