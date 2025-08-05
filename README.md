# 📲 WhatsApp-Driven Google Drive Assistant (n8n Workflow)

## 📌 Objective
A no-code/low-code automation system using `n8n` that connects **WhatsApp** messages to **Google Drive** actions via commands.

---

## 🧩 Features

- List files in a specific Drive folder
- Delete/move a file from one folder to another
- Summarize all documents (PDF/DOCX/TXT) in a folder using OpenAI GPT-4o
- Logs all actions in a Google Sheet
- Sends results/responses back via WhatsApp

---

## 🧪 Example WhatsApp Commands

| Command                         | Description                                      |
|----------------------------------|--------------------------------------------------|
| `LIST /ProjectX`                 | Lists all files in `/ProjectX`                  |
| `DELETE /ProjectX/file.pdf`      | Deletes `file.pdf` from `/ProjectX`             |
| `MOVE /ProjectX/file.pdf /Done`  | Moves file to `/Done` folder                    |
| `SUMMARY /ProjectX`              | Summarizes content of files in the folder       |

---

## ⚙️ Tech Stack

- `n8n` (workflow automation)
- `Twilio` (WhatsApp entry point)
- `Google Drive API`
- `OpenAI GPT-4o` for summarisation
- `Google Sheets` for logging

---

## 🚀 How to Run Locally

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/whatsapp-gdrive-assistant.git
cd whatsapp-gdrive-assistant

