/** @type {import('next').NextConfig} */
import path from 'path';
import url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, './src')],
        prependData: `@import "~@styles/variables.scss";`,
    },
};

export default nextConfig;
