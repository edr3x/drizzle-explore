import "dotenv/config";

export default {
    PORT: parseInt(process.env.PORT as string, 10) || 8080,
    DATABASE_URL: process.env.DATABASE_URL || "",
};
