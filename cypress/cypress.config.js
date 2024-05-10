const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "cypress-hello-world",
  e2e: {
	  supportFile: false,
  },
});
