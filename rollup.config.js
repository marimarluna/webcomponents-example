import { terser } from 'rollup-plugin-terser';
import { readdirSync } from 'fs';
import { resolve } from 'path';

export default {
  input: getInputFiles(),
  output: {
    dir: 'dist',
    format: 'es', 
  },
  plugins: [
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        toplevel: true
      },
      output: {
        comments: false,
      },
    }), 
  ],
};


function getInputFiles() {
    const inputDir = './';
    const files = readdirSync(inputDir)
      .filter(file => file.endsWith('.js') && !file.startsWith('rollup'))
      .map(file => resolve(inputDir, file));
  
    return files;
  }