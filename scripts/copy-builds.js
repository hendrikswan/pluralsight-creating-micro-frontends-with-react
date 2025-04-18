const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Get the destination directory from command line arguments
const destination = process.argv[2];

if (!destination) {
  console.error("Please provide a destination directory as an argument");
  process.exit(1);
}

// Ensure the destination directory exists
if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

// Get list of packages from pnpm
const getPackages = () => {
  try {
    const output = execSync("pnpm list -r --json", { encoding: "utf8" });
    const packages = JSON.parse(output);
    return packages
      .filter((pkg) => pkg.path.includes("packages/"))
      .map((pkg) => pkg.name.split("/").pop());
  } catch (error) {
    console.error("Error getting package list:", error.message);
    process.exit(1);
  }
};

const packages = getPackages();
console.log("Found packages:", packages);

packages.forEach((pkg) => {
  const sourceDir = path.join(__dirname, "..", "packages", pkg, "dist");
  const targetDir =
    pkg === "container" ? destination : path.join(destination, pkg);

  if (fs.existsSync(sourceDir)) {
    // Create the target directory if it doesn't exist
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    // Copy the contents
    try {
      execSync(`cp -r ${sourceDir}/* ${targetDir}/`);
      console.log(`Successfully copied ${pkg} to ${targetDir}`);
    } catch (error) {
      console.error(`Error copying ${pkg}:`, error.message);
    }
  } else {
    console.warn(`Build directory not found for ${pkg}`);
  }
});
