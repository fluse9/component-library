import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

export default {
    input: 'src/index.tsx',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            babelHelpers: 'bundled',
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }),
        serve({
            contentBase: ['dist', 'public'],
            port: 3000,
        }),
        typescript(),
    ],
    external: ['react', 'react-dom'],
};
