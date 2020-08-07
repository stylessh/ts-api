# TS-API
A simple auth api with typescript!

## Usage

To use this app you need to run the following command to install all necessary packages!

```bash
yarn install
```
Then, need to create a **.env** file in root directory. There you can put your mongodb connection string, and the jwt secret key.

Below you can see **.env** structure.

```
DB_URI=
SECRET_KEY=
```

## Development mode

To run a real-time development server run the following command on bash.

```bash
yarn run dev
```

## Build files

If you want to compile all *.ts* files to javascript, run the next command on bash.

```bash
yarn build
```

> **Yarn start** will make a server with the compiled files on *dist* folder.