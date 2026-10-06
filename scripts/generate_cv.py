"""Generate a one-page CV PDF for the portfolio download button."""

from pathlib import Path

try:
    from fpdf import FPDF
except ImportError:
    raise SystemExit("fpdf2 is required")


class CV(FPDF):
    def header(self):
        pass

    def footer(self):
        self.set_y(-14)
        self.set_font("Helvetica", "", 8)
        self.set_text_color(120, 130, 145)
        self.cell(0, 8, "Muhammad Bilal Nazir  |  Chiniot, Pakistan", align="C")


def add_heading(pdf, text):
    pdf.set_font("Helvetica", "B", 11)
    pdf.set_text_color(20, 184, 166)
    pdf.cell(0, 8, text.upper(), new_x="LMARGIN", new_y="NEXT")
    pdf.set_draw_color(20, 184, 166)
    pdf.set_line_width(0.3)
    y = pdf.get_y()
    pdf.line(20, y, 190, y)
    pdf.ln(4)
    pdf.set_text_color(30, 35, 45)


def body(pdf, text):
    pdf.set_font("Helvetica", "", 10)
    pdf.set_text_color(40, 48, 60)
    pdf.multi_cell(0, 5.2, text)
    pdf.ln(2)


def main():
    pdf = CV(format="A4")
    pdf.set_auto_page_break(auto=True, margin=16)
    pdf.add_page()
    pdf.set_margins(20, 18, 20)

    pdf.set_font("Helvetica", "B", 22)
    pdf.set_text_color(15, 23, 42)
    pdf.cell(0, 10, "Muhammad Bilal Nazir", new_x="LMARGIN", new_y="NEXT")

    pdf.set_font("Helvetica", "", 11)
    pdf.set_text_color(15, 118, 110)
    pdf.multi_cell(0, 6, "CS Graduate  |  Full Stack Developer  |  AI & Cybersecurity Researcher")
    pdf.ln(1)

    pdf.set_font("Helvetica", "", 9)
    pdf.set_text_color(80, 90, 105)
    pdf.multi_cell(
        0,
        5,
        "Chiniot, Pakistan   |   bachohan786@gmail.com   |   linkedin.com/in/mbilal-nazir   |   github.com/Bilal-Nazir-3360",
    )
    pdf.ln(4)

    add_heading(pdf, "Summary")
    body(
        pdf,
        "Computer Science graduate from FAST-NUCES building end-to-end systems across full-stack web, machine learning, and cybersecurity. Experience shipping phishing detection (hybrid ML + React), self-supervised vision (Masked Autoencoders), and production-style APIs with FastAPI, Node, and JWT.",
    )

    add_heading(pdf, "Education")
    pdf.set_font("Helvetica", "B", 10)
    pdf.cell(0, 5, "B.S. Computer Science - FAST-NUCES (NUCES)", new_x="LMARGIN", new_y="NEXT")
    pdf.set_font("Helvetica", "", 10)
    pdf.cell(0, 5, "Batch 22  |  Roll No. 22F-3360  |  Chiniot / Pakistan", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)

    add_heading(pdf, "Skills")
    body(
        pdf,
        "Languages: Python, JavaScript, HTML5, CSS3, SQL, C++\n"
        "ML / AI: scikit-learn, PyTorch, TF-IDF, Random Forest, ViT / MAE, NLP\n"
        "Web: React, Vite, Tailwind CSS, Node.js, Express, FastAPI\n"
        "Tools: Git, GitHub, pytest, MongoDB, JWT, Kaggle",
    )

    add_heading(pdf, "Selected Projects")
    items = [
        (
            "PhishGuard",
            "AI phishing URL & email detector. FastAPI ML (Random Forest + TF-IDF/LogReg), Express/JWT gateway, React dashboard with highlighting and confidence gauges. github.com/Bilal-Nazir-3360/PhishGuard",
        ),
        (
            "Masked Autoencoder (MAE)",
            "Self-supervised ViT MAE on TinyImageNet (75% masking). Best val loss 0.2121, PSNR 21.82 dB, SSIM 0.69. github.com/Bilal-Nazir-3360/GenAI-Assignment-2-MAE",
        ),
        (
            "PlanPilot",
            "Task-management frontend with AJAX content, animated stats, reviews, and support chat. github.com/Bilal-Nazir-3360/Assignment_2-Web",
        ),
        (
            "Software Testing Suite",
            "Four pytest modules: fixtures, parametrization, coverage, auth lockout. 57 passing tests. github.com/Bilal-Nazir-3360/ST-PyTest-Assignment",
        ),
    ]
    for title, desc in items:
        pdf.set_font("Helvetica", "B", 10)
        pdf.set_text_color(15, 23, 42)
        pdf.cell(0, 5, title, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Helvetica", "", 9.5)
        pdf.set_text_color(50, 58, 70)
        pdf.multi_cell(0, 5, desc)
        pdf.ln(1.5)

    add_heading(pdf, "Research")
    pdf.set_font("Helvetica", "B", 10)
    pdf.set_text_color(15, 23, 42)
    pdf.multi_cell(0, 5, "Hybrid Machine Learning for Explainable Phishing URL and Email Detection")
    pdf.set_font("Helvetica", "I", 9)
    pdf.set_text_color(180, 120, 40)
    pdf.cell(0, 5, "Status: Under Review", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1)
    body(
        pdf,
        "Hybrid lexical Random Forest (URLs) with TF-IDF logistic regression (email), token-level highlights, and calibrated confidence scores for deployment as a full-stack scanning service.",
    )

    add_heading(pdf, "Activities")
    body(
        pdf,
        "- FAST-NUCES Computer Science graduate (2026)\n"
        "- Information Security capstone: PhishGuard\n"
        "- Generative AI coursework: Masked Autoencoders on TinyImageNet\n"
        "- Independent AI & cybersecurity research (manuscript under review)\n"
        "- Open-source work at github.com/Bilal-Nazir-3360",
    )

    out = Path(__file__).resolve().parent.parent / "public" / "Muhammad-Bilal-Nazir-CV.pdf"
    pdf.output(str(out))
    print(f"Wrote {out}")


if __name__ == "__main__":
    main()
