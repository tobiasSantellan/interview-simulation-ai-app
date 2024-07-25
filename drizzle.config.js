/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:7F5LzeySIlEY@ep-old-wind-a5vns660.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
};
