import * as fs from 'fs';
import * as path from 'path';

const solutionsPath = path.join(__dirname, '..', 'solutions');
const folders = fs.readdirSync(solutionsPath);
const solvers = new Set();

folders.forEach((folder) => {
  const folderPath = path.join(solutionsPath, folder);
  const files = fs.readdirSync(folderPath);
  files.forEach((file) => {
    solvers.add(folder + '.' + file);
  })
})

export default function validate( m: string, d: string) : boolean {
  return solvers.has(m + '.' + d);
}