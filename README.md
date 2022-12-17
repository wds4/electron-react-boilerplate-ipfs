This is a fork of [electron-react-boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate) (erb) to which has been added the ability to access the local machine IPFS node. The app is production ready.

To create this app, after forking erb, only one installation was necessary:
```
npm install ipfs-http-client
```
I didn't make any changes to the main process. The IPFS node is accessed entirely through the renderer process. See [this file](https://github.com/wds4/electron-react-boilerplate-ipfs/blob/main/src/renderer/pages/lib/ipfs/ipfsHttpClient.ts) for the relevant functions.

The IPFS node must be installed separately by the user and running on the local machine for this to work. The easiest way for the user to do this is to download, install and run [IPFS Desktop](https://docs.ipfs.tech/install/ipfs-desktop/) (or could be done at the terminal).

I am currently looking for a way to incorporate basic IPFS Desktop functionality into my app so that the user won't necessarily have to do the IPFS installation separately. If you know how to do this, let me know!

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main https://github.com/wds4/electron-react-boilerplate-ipfs.git your-project-name
cd your-project-name
npm install
```

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```

## License

MIT © [Electron React Boilerplate](https://github.com/electron-react-boilerplate)
