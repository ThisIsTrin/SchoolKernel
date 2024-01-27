if (process.env.__DEV__) {
    require("dotenv").config({
        path: `${__dirname}/../.env.dev`,
    });
} else {
    require("dotenv").config()
}

const main = async () => {

};

main().catch((err: any) => {
    console.error(err);
});
