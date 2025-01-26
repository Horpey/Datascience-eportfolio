## Nuxt 3 Project - README

## **Overview**

This project is built using **Nuxt 3** and **Tailwind CSS** to showcase my e-portfolio for the module. The professor can view the project locally or by accessing the provided link.

---

## **Prerequisites**

To set up the project locally, ensure you have the following installed:

1.  **Node.js** (version 16.x or later) and **pnpm**

    - For macOS users, install Node.js using nvm:

      ```plaintext
      curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
      ```

    - For Windows users, install Node.js using fnm:

      ```plaintext
      winget install Schniz.fnm
      fnm install 22
      ```

    - Install pnpm:

      ```plaintext
      npm install -g pnpm
      ```

    - Verify installation:

      ```plaintext
      node -v
      pnpm -v
      ```

---

## **Getting Started**

### 1\. **Download and Extract the Project**

- Download the `.zip` file provided and extract it to your desired location.

### 2\. **Install Dependencies**

- Open a terminal and navigate to the extracted project folder:

  ```plaintext
  cd /path/to/extracted-folder
  ```

- Install required dependencies:

  ```plaintext
  pnpm install
  ```

### 3\. **Run the Development Server**

- Start the Nuxt 3 development server:

  ```plaintext
  pnpm dev
  ```

- Access the project in your browser:

  ```plaintext
  http://localhost:3000
  ```

---

## **Troubleshooting**

- If you encounter issues, try clearing the `node_modules` folder and reinstalling dependencies:

  ```plaintext
  rm -rf node_modules
  pnpm install
  ```

- Ensure your firewall or antivirus allows access to `localhost:3000`.
- Refer to the [Nuxt 3 documentation](https://nuxt.com/docs) for additional help.
