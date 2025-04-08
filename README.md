# Fire Growth Modelling Website Builder

This repository contains the source code and development environment for the [Fire Growth Modelling website](https://firegrowthmodel.ca/). The website is built using Vite, TypeScript, and React.

## Repository Structure

This repository has a specific structure:

- The main repository (`website_builder`) contains all the source code, configurations, and development environment for building the website.
- The `dist` folder is set up as a Git submodule pointing to the public repository [`firegrowthmodelling.ca`](https://github.com/WISE-Developers/firegrowthmodelling.ca).
- When you build the website, the output is generated in this `dist` folder.
- Changes committed and pushed from the `dist` folder will be published to the live website at [firegrowthmodel.ca](https://firegrowthmodel.ca/).
- The `resources` folder inside the `dist` folder, contains the legacy COM documentation, dont alter it or remove it.
- The `CNAME` file in the `dist' folder must remain there and not be altered, this is partof GHP configuration.

## Important Notes

### The dev (draft) website

**The website builder only modifies the draft website, never the live one directly.**

Changes to the live website only happen when you:

1. Build the website
2. Commit the changes in the `dist` folder
3. Push those changes to the public repository

### The dist folder

**NEVER manually alter the contents of the `dist` folder, you can break the website or permanently lose resources.**

## Development Workflow

### Local Development

To start the development server for local live development:

```bash
npm run dev
```

This will start a local development server, usually at `http://localhost:5173`. Changes you make to the source code will be reflected immediately in the browser - no refreshing needed!

- be sure to alter page components eg:

    ``` yaml
    src/pages/FBANTools.tsx
    ```

    -or- subpages eg:

    ``` yaml
    src/pages/WISEDocumentation.tsx
    ```

- Inside the TSX file remember, you are NOT editing HTML or TypeScript you are in fact editing React JSX syntax, which is a JavaScript extension that allows you to write HTML-like code within JavaScript/TypeScript. For more info on this, check out: <https://react-typescript-cheatsheet.netlify.app/>
- When you are done making changes and are ready to publish the changes, load and edit:

    ``` yaml
    src/components/Footer.tsx
    ```

    and change the date:

    ``` html
    <div id="footer">
      <ul>
        <li id="left"><a href="#top">Top of Page</a></li>
        <li className="right" id="footer-date">Site updated: 2025-04-07</li>
      </ul>
    </div>
    ```

    to todays date.

### Building the Website

When you're ready to build the website for production:

``` bash
npm run build
```

This command compiles and optimizes the website, placing the output in the `dist` folder (which is the submodule pointing to the public repository).

### Testing the Build Locally

To simulate GitHub Pages hosting locally and test the built website:

```bash
npm run testHosting
```

**Important:** Do NOT use LiveServer or similar tools to test the built website, as they may not accurately represent how the site will behave on GitHub Pages.

### Publishing the Website

After building the website, you need to commit and push the changes in the `dist` folder to publish them to the live website:

```bash
# Navigate to the dist folder
cd dist

# Add all changes
git add .

# Commit changes
git commit -m "Update website with [describe your changes]"

# Push to the public repository
git push

# Return to the main repository
cd ..

# Commit the updated submodule reference
git add dist
git commit -m "Update website build reference"
git push
```

## Initial Setup for New Administrators

If you're a new administrator cloning this repository for the first time:

```bash
# Clone the repository with its submodule
git clone --recurse-submodules https://github.com/WISE-Developers/website_builder.git

# Navigate to the repository
cd website_builder

# Install dependencies
npm install
```

## Updating the Repository

To keep your local copy up to date:

```bash
# Pull the latest changes
git pull

# Update the submodule
git submodule update --remote
```

## Troubleshooting

### Submodule Issues

If you encounter issues with the submodule, you may need to reinitialize it:

```bash
git submodule update --init --recursive
```

### Build Issues

If you're having trouble with the build process:

1. Make sure you have the latest dependencies: `npm install`
2. Clear the cache: `npm run clean` (if available) or manually delete the `.cache` directory
3. Try building again: `npm run build`

## Contact

For questions or issues related to website development, please contact [appropriate contact information].

## License

[Appropriate license information]
