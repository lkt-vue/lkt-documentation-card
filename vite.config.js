import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

const src = resolve(__dirname, 'src');
const test = resolve(__dirname, 'test');
const snapshots = resolve(__dirname, 'snapshots');

export default {
    plugins: [vue()],
    resolve: {
        alias: { '@': src, '@test': test }
    },
    build: {
        lib: {
            entry: `${ src }/index.ts`,
            name: 'LktDocumentationCard',
            fileName: (format) => `lkt-documentation-card.${ format }.js`
        },
        minify: true,
        rollupOptions: {
            external: [
                'vue',
                'lkt-anchor',
                'lkt-field-file',
                'lkt-field-select',
                'lkt-ts-interfaces',
                'lkt-http-client',
                'lkt-field-text',
                'lkt-button',
                'lkt-modal',
                'lkt-modal-crud',
                'lkt-string-tools'
            ],
            output: {
                globals: {
                    vue: 'Vue',
                    'lkt-anchor': 'LktAnchor',
                },
                sourcemapExcludeSources: true
            }
        }
    },
    test: {
        coverage: {
            reporter: [ 'text', 'lcov' ]
        },
        resolveSnapshotPath: (testPath, snapExtension) => {
            const path = testPath.split('/').splice(-2);
            return `${ snapshots }/${ path[0] }/${ path[1] }${ snapExtension }`;
        }
    }
};