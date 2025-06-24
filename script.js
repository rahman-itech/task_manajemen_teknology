document.addEventListener('DOMContentLoaded', function() {

    // =================================================================
    // KAMUS TERJEMAHAN
    // =================================================================
    const translations = {
        en: {
            // Static UI Elements
            pageTitle: "Technology Strategy Simulation: Kopi Nusantara Jaya",
            mainTitle: "Simulation: The Chief Technology Strategist",
            caseStudy: "Case Study: Kopi Nusantara Jaya",
            showTaskBtn: "View Task Instructions",
            kpiBudget: "Budget",
            kpiSatisfaction: "Customer Satisfaction",
            kpiMorale: "Staff Morale",
            kpiMarketShare: "Market Share",
            logTitle: "Decision & Outcome Log",

            // Task Modal Translations
            taskHeader: "Assignment",
            taskTitle: "Comparative Analysis of Digital Transformation Strategies: A Simulation Case Study",
            taskCourseLabel: "Course:",
            taskCourseName: "Technology Management",
            taskMajorLabel: "Study Program:",
            taskMajorName: "Master of Innovation Management",
            taskTypeLabel: "Assignment Type:",
            taskTypeName: "Individual",
            taskIntroH3: "1. INTRODUCTION",
            taskIntroP1: "This assignment is designed to provide practical experience in strategic decision-making in the field of technology management. Each student is challenged to act as a leader in a dynamic and uncertain business scenario. Using the 'Kopi Nusantara Jaya' simulation case study, students will apply managerial and analytical frameworks to formulate, test, and evaluate various strategic approaches, and to analyze the consequences of each decision made.",
            taskLearningOutcomesH3: "2. LEARNING OUTCOMES",
            taskLearningOutcomesP1: "After completing this assignment, students are expected to be able to:",
            taskLO1: "Analyze a complex business case to identify the challenges and opportunities of digital transformation.",
            taskLO2: "Formulate fundamentally different technology strategy hypotheses, based on relevant theoretical frameworks.",
            taskLO3: "Evaluate the trade-offs between various business performance metrics (financial, customer, operational, and market) as a result of strategy implementation.",
            taskLO4: "Synthesize simulation data with concepts from academic literature to produce an in-depth and substantive analysis.",
            taskLO5: "Communicate findings, analysis, and strategic recommendations professionally through a structured scientific report.",
            taskDescH3: "3. TASK DESCRIPTION",
            taskDescP1: "Each student, individually, is required to conduct a comparative strategic analysis with the following steps:",
            taskDescStage1Header: "<strong>Stage I: Formulation of Strategy Hypotheses</strong>",
            taskDescStage1P1: "Before starting the simulation, each student must formulate a minimum of three (3) strategy hypotheses to be tested. Each hypothesis must include:",
            taskDescStage1L1: "Strategy Name: A representative name (e.g., 'Market Aggressiveness Strategy', 'Internal Consolidation Strategy', 'Calculated Risk Innovation Strategy').",
            taskDescStage1L2: "Philosophy & Theoretical Framework: A brief description (1-2 paragraphs) of the logic underlying the strategy.",
            taskDescStage2Header: "<strong>Stage II: Simulation Execution and Data Collection</strong>",
            taskDescStage2P1: "Run the simulation for each formulated strategy hypothesis and collect all relevant data.",
            taskDescStage3Header: "<strong>Stage III: Analysis and Report Writing</strong>",
            taskDescStage3P1: "Conduct an in-depth analysis, compare the effectiveness of the strategies, and compile it in the specified scientific report format.",
            taskReportStructureH3: "4. SCIENTIFIC REPORT STRUCTURE",
            taskReportStructureP1: "The report must be systematically structured following this detailed outline:",
            taskReportBab1: "<strong>CHAPTER I: INTRODUCTION</strong><ul><li data-translate-key='taskReportBab1_1'>1.1 Background (description of the 'Kopi Nusantara Jaya' case).</li><li data-translate-key='taskReportBab1_2'>1.2 Problem Statement.</li><li data-translate-key='taskReportBab1_3'>1.3 Research Objectives and Benefits.</li></ul>",
            taskReportBab2: "<strong>CHAPTER II: LITERATURE REVIEW</strong><ul><li data-translate-key='taskReportBab2_1'>A brief review of relevant theories and concepts, such as:</li><li data-translate-key='taskReportBab2_2'>The Link between Business Strategy and Technology Strategy.</li><li data-translate-key='taskReportBab2_3'>Technology Decision Framework (Build vs. Buy vs. Partner).</li><li data-translate-key='taskReportBab2_4'>Change Management in Technology Implementation.</li><li data-translate-key='taskReportBab2_5'>The Concept of Technical Debt and Integration Risk.</li></ul>",
            taskReportBab3: "<strong>CHAPTER III: RESEARCH METHODOLOGY</strong><ul><li data-translate-key='taskReportBab3_1'>3.1 Research Design (explaining the use of the simulation case study method).</li><li data-translate-key='taskReportBab3_2'>3.2 Description of Strategy Hypotheses (explaining the name, philosophy, and theoretical justification of the three tested strategies).</li><li data-translate-key='taskReportBab3_3'>3.3 Data Collection Procedure (explaining how data from the simulation was collected).</li></ul>",
            taskReportBab4: "<strong>CHAPTER IV: RESULTS AND DISCUSSION</strong><ul><li data-translate-key='taskReportBab4_1'>4.1 Presentation of Results (including a comparative table of quantitative data).</li><li data-translate-key='taskReportBab4_2'>4.2 Analysis of Results per Strategy (in-depth analysis for each strategy run, linking decisions to outcomes).</li><li data-translate-key='taskReportBab4_3'>4.3 Comparative Analysis (cross-strategy comparison, highlighting trade-offs and success/failure factors).</li><li data-translate-key='taskReportBab4_4'>4.4 Discussion of Findings (interpreting the analysis results and linking them back to the theories in the Literature Review).</li></ul>",
            taskReportBab5: "<strong>CHAPTER V: CONCLUSION AND STRATEGIC RECOMMENDATIONS</strong><ul><li data-translate-key='taskReportBab5_1'>5.1 Conclusion (summary of the main findings).</li><li data-translate-key='taskReportBab5_2'>5.2 Strategic Recommendations (final, actionable recommendations for the 'Kopi Nusantara Jaya Board of Directors').</li><li data-translate-key='taskReportBab5_3'>5.3 Limitations and Directions for Future Research.</li></ul>",
            taskReportDapus: "<strong>REFERENCES</strong><ul><li data-translate-key='taskReportDapus_1'>Use APA 7th Edition citation format or another format consistently.</li></ul>",
            taskCriteriaH3: "5. GRADING CRITERIA",
            taskCriteria1: "Depth of Analysis and Discussion (40%)",
            taskCriteria2: "Application of Theory and Use of References (25%)",
            taskCriteria3: "Structure, Clarity, and Professionalism of the Report (20%)",
            taskCriteria4: "Originality and Depth of Strategy Formulation (15%)",
            taskSubmissionH3: "6. SUBMISSION REQUIREMENTS",
            taskSubmission1: "The report must be submitted in .PDF format.",
            taskSubmission2: "File name format: [CourseName]_[StudentID]_[StudentName].pdf",

            // Dynamic Game Content
            missionBriefingTitle: "Your Mission Briefing",
            missionBriefingStory: `<p>Welcome to <strong>Kopi Nusantara Jaya</strong>.</p><p><strong>YOUR PRIMARY OBJECTIVE:</strong> To lead a 2-year digital transformation to turn the company around, enhance competitiveness, and ensure sustainable growth.</p><p><strong>KEY CHALLENGES YOU FACE:</strong></p><ul><li><strong>1. Declining Customer Loyalty:</strong> Long-time customers are starting to switch to more modern competitors.</li><li><strong>2. Inefficient Internal Processes:</strong> Our staff still uses time-consuming and error-prone legacy methods.</li><li><strong>3. Reliance on Physical Sales:</strong> We lack a significant online revenue stream.</li></ul><p><strong>SUCCESS CRITERIA (YOUR MINIMUM TARGETS):</strong></p><p>Your mission is considered successful if, at the end of the second year, you achieve the following targets:</p><ul><li><strong>Budget:</strong> Maintain a remaining budget above <strong>Rp 2,500,000</strong>.</li><li><strong>Customer Satisfaction:</strong> Increase to at least <strong>75%</strong>.</li><li><strong>Staff Morale:</strong> Raise to at least <strong>85%</strong>.</li><li><strong>Market Share:</strong> Recapture and grow to at least <strong>25%</strong>.</li></ul><hr><p><strong>YOUR OUTPUT & LEARNING BENEFITS:</strong></p><p>After completing this simulation, you will gain:</p><ul><li><strong>Output:</strong> A tangible track record of strategic decisions. You will see firsthand how choices like 'Build vs. Buy' or 'Investment in Training' shape a company's destiny.</li><li><strong>Learning Benefits:</strong><ul><li><strong>Strategic Decision-Making:</strong> Practice making tough choices under pressure with limited information.</li><li><strong>Trade-Off Management:</strong> Understand that no decision is perfect. Every choice is a trade-off between budget, time, quality, and stakeholder satisfaction.</li><li><strong>Systems Thinking:</strong> See how first-year decisions (like accumulating 'technical debt') can have unforeseen consequences in the second year.</li></ul></li><li><strong>Real-World Impact:</strong> This simulation is a 'gym' to train your managerial muscles. The ability to translate strategy into execution, manage risk, and justify technology investments is what separates an ordinary manager from a visionary innovation leader. This is the bridge between classroom theory and boardroom reality.</li></ul><p>Every decision has consequences. Think carefully. Your mission begins now.</p>`,
            missionBriefingDecision: "I Understand. Start Mission!",
            turn0Title: "First Step: Determining Strategic Focus",
            turn0Story: "Based on the mission briefing, which issue do you think is the most urgent to address as the foundation of your strategy?",
            turn0Decision1: "Focus on Customer Loyalty",
            turn0Decision2: "Focus on New Revenue Streams",
            turn0Decision3: "Focus on Operational Efficiency",
            initiativeName_crm: "CRM & Loyalty Program",
            initiativeName_ecommerce: "E-commerce Platform",
            initiativeName_pos: "Modernize POS System",
            turn1Title: "Round 1: First Year Initiative",
            turn1Story: "The budget is limited. You can only run one major initiative this year. Which one will you prioritize?",
            turn2Title: "Round 1: Implementation Approach",
            turn2Story: "You have chosen to focus on [INISIATIF]. How will you implement it?",
            bbpDecision1: "Build In-House",
            bbpDecision2: "Buy Off-the-shelf Solution",
            bbpDecision3: "Partner with a Vendor",
            turn2_5Title: "Round 1: Employee Adoption Challenge",
            turn2_5Story: "The new system has been chosen! However, some staff seem anxious and resistant to this change. What will you do?",
            turn2_5Decision1: "Invest in Training & Communication (-Rp 200,000)",
            turn2_5Decision2: "Let It Be, They Will Get Used to It",
            turn3Title: "Round 2: Market Disruption!",
            turn3Story: "Big news! Competitor 'Kopi Kilat' has launched a weekly coffee subscription model that has gone viral. Our customers are starting to look their way. How do you respond?",
            turn3Decision1: "Adapt Quickly: Create a similar program (-Rp 300,000)",
            turn3Decision2: "Ignore: Focus on our original plan",
            turn4Title: "Round 3: Second Year Initiative",
            turn4Story: "The challenge from competitors is becoming more real. What initiative will you run next to strengthen our position?",
            turn5Title: "Round 3: Implementation Approach",
            turn5Story: "You have chosen to focus on [INISIATIF]. How will you implement it?",
            turn5_5Title: "Round 3: Employee Adoption Challenge",
            turn5_5Story: "Again, a new system will be implemented. The staff is more used to it, but still needs guidance. What is your move?",
            turn5_5Decision1: "Invest in Advanced Training (-Rp 200,000)",
            turn5_5Decision2: "They've Learned, Let Them Be",
            turn6Title: "Round 4: The 'Follow-up Bill' Arrives!",
            turn6Story: "A report from the IT team: The two 'Buy' systems we implemented from different vendors are difficult to integrate! We need a consultant to connect them.",
            turn6Decision1: "Pay for an Integration Consultant (-Rp 500,000)",
            turn7Title: "Final Performance Report",
            turn7Story: "Your 2-year mission is complete. You have faced various challenges and made difficult decisions. Let's see the final results of your strategy...",
            finalReportButton: "Play Again",
            logFocusSet: "Strategic focus set on: ",
            logInitiativeChosen: "Initiative chosen: ",
            logImplementationStarted: "Implementation of [${initiativeName} - ${choice}] started. Initial impact recorded.",
            logFocusBonus: "Decision aligns with focus! Received a 30% impact bonus.",
            logBuildProblem: "Bad News! The 'Build' project ran into issues, increasing costs and lowering the developer team's morale.",
            logTrainingInvest: "You invested in training. Staff feel valued and are more prepared for the change.",
            logTrainingIgnored: "You ignored staff concerns. Unrest and resistance to the new system have emerged.",
            logMarketAdapt: "You responded quickly! It cost money, but you managed to withstand the competitor's assault.",
            logMarketIgnored: "You chose to focus on the original plan. Market share has been significantly eroded by the competitor.",
            logTechDebtPaid: "The integration cost is paid. The IT team is relieved the issue is resolved, but the budget took a hard hit."
        },
        id: {
            // Static UI Elements
            pageTitle: "Simulasi Strategi Teknologi: Kopi Nusantara Jaya",
            mainTitle: "Simulasi: The Chief Technology Strategist",
            caseStudy: "Studi Kasus: Kopi Nusantara Jaya",
            showTaskBtn: "Lihat Instruksi Tugas",
            kpiBudget: "Anggaran",
            kpiSatisfaction: "Kepuasan Pelanggan",
            kpiMorale: "Moral Staf",
            kpiMarketShare: "Pangsa Pasar",
            logTitle: "Log Keputusan & Hasil",

            // Task Modal Translations
            taskHeader: "Tugas",
            taskTitle: "Analisis Komparatif Strategi Transformasi Digital: Studi Kasus Simulasi",
            taskCourseLabel: "Mata Kuliah:",
            taskCourseName: "Manajemen Teknologi",
            taskMajorLabel: "Program Studi:",
            taskMajorName: "Magister Manajemen Inovasi",
            taskTypeLabel: "Sifat Tugas:",
            taskTypeName: "Individual",
            taskIntroH3: "1. PENDAHULUAN",
            taskIntroP1: "Tugas ini dirancang untuk memberikan pengalaman praktis dalam pengambilan keputusan strategis di bidang manajemen teknologi. Setiap mahasiswa ditantang untuk bertindak sebagai pemimpin dalam sebuah skenario bisnis yang dinamis dan penuh ketidakpastian. Dengan menggunakan studi kasus simulasi \"Kopi Nusantara Jaya\", mahasiswa akan menerapkan kerangka kerja manajerial dan analitis untuk merumuskan, menguji, dan mengevaluasi berbagai pendekatan strategi, serta menganalisis konsekuensi dari setiap keputusan yang diambil.",
            taskLearningOutcomesH3: "2. CAPAIAN PEMBELAJARAN",
            taskLearningOutcomesP1: "Setelah menyelesaikan penugasan ini, mahasiswa diharapkan mampu:",
            taskLO1: "Menganalisis (Analyze) sebuah kasus bisnis yang kompleks untuk mengidentifikasi tantangan dan peluang transformasi digital.",
            taskLO2: "Merumuskan (Formulate) hipotesis strategi teknologi yang berbeda secara fundamental, berdasarkan kerangka teoretis yang relevan.",
            taskLO3: "Mengevaluasi (Evaluate) trade-off antara berbagai metrik kinerja bisnis (finansial, pelanggan, operasional, dan pasar) sebagai hasil dari implementasi strategi.",
            taskLO4: "Mensintesis (Synthesize) data hasil simulasi dengan konsep-konsep dari literatur akademis untuk menghasilkan analisis yang mendalam dan berbobot.",
            taskLO5: "Mengkomunikasikan (Communicate) temuan, analisis, dan rekomendasi strategis secara profesional melalui sebuah laporan ilmiah yang terstruktur.",
            taskDescH3: "3. DESKRIPSI TUGAS",
            taskDescP1: "Setiap mahasiswa, secara individual, diwajibkan untuk melakukan analisis strategis komparatif dengan langkah-langkah sebagai berikut:",
            taskDescStage1Header: "<strong>Tahap I: Perumusan Hipotesis Strategi</strong>",
            taskDescStage1P1: "Sebelum memulai simulasi, setiap mahasiswa harus merumuskan minimal tiga (3) hipotesis strategi yang akan diuji. Setiap hipotesis harus mencakup:",
            taskDescStage1L1: "Nama Strategi: Sebuah nama yang representatif (misalnya, \"Strategi Agresivitas Pasar\", \"Strategi Konsolidasi Internal\", \"Strategi Inovasi Berisiko Terukur\").",
            taskDescStage1L2: "Filosofi & Kerangka Teoretis: Deskripsi singkat (1-2 paragraf) mengenai logika yang mendasari strategi tersebut.",
            taskDescStage2Header: "<strong>Tahap II: Pelaksanaan Simulasi dan Pengumpulan Data</strong>",
            taskDescStage2P1: "Jalankan simulasi untuk setiap hipotesis strategi yang telah dirumuskan dan kumpulkan semua data yang relevan.",
            taskDescStage3Header: "<strong>Tahap III: Analisis dan Penyusunan Laporan</strong>",
            taskDescStage3P1: "Lakukan analisis mendalam, bandingkan efektivitas strategi, dan susun dalam format laporan ilmiah yang ditentukan.",
            taskReportStructureH3: "4. STRUKTUR LAPORAN ILMIAH",
            taskReportStructureP1: "Laporan harus disusun secara sistematis mengikuti struktur rinci berikut:",
            taskReportBab1: "<strong>BAB I: PENDAHULUAN</strong><ul><li data-translate-key='taskReportBab1_1'>1.1 Latar Belakang Masalah (deskripsi kasus \"Kopi Nusantara Jaya\").</li><li data-translate-key='taskReportBab1_2'>1.2 Rumusan Masalah.</li><li data-translate-key='taskReportBab1_3'>1.3 Tujuan dan Manfaat Penelitian.</li></ul>",
            taskReportBab2: "<strong>BAB II: TINJAUAN PUSTAKA</strong><ul><li data-translate-key='taskReportBab2_1'>Ulasan singkat mengenai teori dan konsep yang relevan, seperti:</li><li data-translate-key='taskReportBab2_2'>Keterkaitan Strategi Bisnis dan Strategi Teknologi.</li><li data-translate-key='taskReportBab2_3'>Kerangka Kerja Keputusan Teknologi (Build vs. Buy vs. Partner).</li><li data-translate-key='taskReportBab2_4'>Manajemen Perubahan dalam Implementasi Teknologi.</li><li data-translate-key='taskReportBab2_5'>Konsep Hutang Teknis (Technical Debt) dan Risiko Integrasi.</li></ul>",
            taskReportBab3: "<strong>BAB III: METODOLOGI PENELITIAN</strong><ul><li data-translate-key='taskReportBab3_1'>3.1 Desain Penelitian (menjelaskan penggunaan metode studi kasus simulasi).</li><li data-translate-key='taskReportBab3_2'>3.2 Deskripsi Hipotesis Strategi (menjelaskan nama, filosofi, dan justifikasi teoretis dari ketiga strategi yang diuji).</li><li data-translate-key='taskReportBab3_3'>3.3 Prosedur Pengumpulan Data (menjelaskan bagaimana data dari simulasi dikumpulkan).</li></ul>",
            taskReportBab4: "<strong>BAB IV: HASIL DAN PEMBAHASAN</strong><ul><li data-translate-key='taskReportBab4_1'>4.1 Penyajian Hasil (termasuk tabel perbandingan data kuantitatif).</li><li data-translate-key='taskReportBab4_2'>4.2 Analisis Hasil per Strategi (analisis mendalam untuk setiap strategi yang dijalankan, menghubungkan keputusan dengan hasil).</li><li data-translate-key='taskReportBab4_3'>4.3 Analisis Komparatif (perbandingan lintas strategi, menyoroti trade-off dan faktor penentu keberhasilan/kegagalan).</li><li data-translate-key='taskReportBab4_4'>4.4 Diskusi Temuan (menginterpretasikan hasil analisis dan menghubungkannya kembali dengan teori pada Tinjauan Pustaka).</li></ul>",
            taskReportBab5: "<strong>BAB V: KESIMPULAN DAN REKOMENDASI STRATEGIS</strong><ul><li data-translate-key='taskReportBab5_1'>5.1 Kesimpulan (ringkasan dari temuan utama).</li><li data-translate-key='taskReportBab5_2'>5.2 Rekomendasi Strategis (rekomendasi final yang actionable untuk \"Dewan Direksi Kopi Nusantara Jaya\").</li><li data-translate-key='taskReportBab5_3'>5.3 Keterbatasan dan Arah Penelitian Selanjutnya.</li></ul>",
            taskReportDapus: "<strong>DAFTAR PUSTAKA</strong><ul><li data-translate-key='taskReportDapus_1'>Gunakan format sitasi APA 7th Edition atau yang lain secara konsisten.</li></ul>",
            taskCriteriaH3: "5. KRITERIA PENILAIAN",
            taskCriteria1: "Kedalaman Analisis dan Pembahasan (40%)",
            taskCriteria2: "Aplikasi Teori dan Penggunaan Referensi (25%)",
            taskCriteria3: "Struktur, Kejelasan, dan Profesionalisme Laporan (20%)",
            taskCriteria4: "Orisinalitas dan Kedalaman Perumusan Strategi (15%)",
            taskSubmissionH3: "6. KETENTUAN PENGUMPULAN",
            taskSubmission1: "Laporan diserahkan dalam format .PDF.",
            taskSubmission2: "Format nama file: [NamaMataKuliah]_[NIM]_[NamaMahasiswa].pdf",

            // Dynamic Game Content
            missionBriefingTitle: "Briefing Misi Anda",
            missionBriefingStory: `<p>Selamat datang di <strong>Kopi Nusantara Jaya</strong>.</p><p><strong>TUJUAN UTAMA ANDA:</strong> Memimpin transformasi digital selama 2 tahun untuk membalikkan keadaan perusahaan, meningkatkan daya saing, dan memastikan pertumbuhan yang berkelanjutan.</p><p><strong>TANTANGAN KUNCI YANG ANDA HADAPI:</strong></p><ul><li><strong>1. Loyalitas Pelanggan Menurun:</strong> Pelanggan lama mulai beralih ke kompetitor yang lebih modern.</li><li><strong>2. Proses Internal Tidak Efisien:</strong> Staf kami masih menggunakan cara-cara lama yang memakan waktu dan rentan kesalahan.</li><li><strong>3. Ketergantungan pada Penjualan Fisik:</strong> Kami tidak memiliki sumber pendapatan online yang signifikan.</li></ul><p><strong>KRITERIA KESUKSESAN (TARGET MINIMUM ANDA):</strong></p><p>Misi Anda dianggap berhasil jika di akhir tahun kedua, Anda mampu mencapai target-target berikut:</p><ul><li><strong>Anggaran:</strong> Menjaga sisa anggaran di atas <strong>Rp 2.500.000</strong>.</li><li><strong>Kepuasan Pelanggan:</strong> Meningkatkan hingga mencapai minimal <strong>75%</strong>.</li><li><strong>Moral Staf:</strong> Mengangkat hingga mencapai minimal <strong>85%</strong>.</li><li><strong>Pangsa Pasar:</strong> Merebut kembali dan menumbuhkan hingga minimal <strong>25%</strong>.</li></ul><hr><p><strong>OUTPUT & MANFAAT PEMBELAJARAN ANDA:</strong></p><p>Setelah menyelesaikan simulasi ini, Anda akan memperoleh:</p><ul><li><strong>Hasil (Output):</strong> Sebuah rekam jejak keputusan strategis yang nyata. Anda akan melihat secara langsung bagaimana pilihan seperti 'Build vs. Buy' atau 'Investasi pada Pelatihan' membentuk nasib sebuah perusahaan.</li><li><strong>Manfaat Belajar (Learning Benefits):</strong><ul><li><strong>Pengambilan Keputusan Strategis:</strong> Berlatih membuat pilihan sulit di bawah tekanan dengan informasi terbatas.</li><li><strong>Manajemen Trade-Off:</strong> Memahami bahwa tidak ada keputusan yang sempurna. Setiap pilihan adalah pengorbanan antara anggaran, waktu, kualitas, dan kepuasan pemangku kepentingan.</li><li><strong>Pemikiran Sistemik:</strong> Melihat bagaimana keputusan di tahun pertama (seperti menumpuk 'hutang teknis') dapat menimbulkan konsekuensi tak terduga di tahun kedua.</li></ul></li><li><strong>Dampak Dunia Nyata (Real-World Impact):</strong> Simulasi ini adalah 'gym' untuk melatih otot manajerial Anda. Kemampuan untuk menerjemahkan strategi menjadi eksekusi, mengelola risiko, dan membenarkan investasi teknologi adalah apa yang membedakan seorang manajer biasa dengan seorang pemimpin inovasi yang visioner. Inilah jembatan antara teori di kelas dan realitas di ruang rapat.</li></ul><p>Setiap keputusan memiliki konsekuensi. Pikirkan baik-baik. Misi Anda dimulai sekarang.</p>`,
            missionBriefingDecision: "Saya Mengerti. Mulai Misi!",
            turn0Title: "Langkah Pertama: Menentukan Fokus Strategis",
            turn0Story: "Berdasarkan briefing misi, masalah mana yang menurut Anda paling mendesak untuk diatasi sebagai fondasi strategi Anda?",
            turn0Decision1: "Fokus pada Loyalitas Pelanggan",
            turn0Decision2: "Fokus pada Sumber Pendapatan Baru",
            turn0Decision3: "Fokus pada Efisiensi Operasional",
            initiativeName_crm: "CRM & Loyalty Program",
            initiativeName_ecommerce: "Platform E-commerce",
            initiativeName_pos: "Modernisasi Sistem POS",
            turn1Title: "Putaran 1: Inisiatif Tahun Pertama",
            turn1Story: "Anggaran terbatas. Anda hanya bisa menjalankan satu inisiatif besar tahun ini. Mana yang akan Anda prioritaskan?",
            turn2Title: "Putaran 1: Pendekatan Implementasi",
            turn2Story: "Anda telah memilih untuk fokus pada [INISIATIF]. Bagaimana Anda akan mengimplementasikannya?",
            bbpDecision1: "Bangun Sendiri (Build)",
            bbpDecision2: "Beli Solusi Jadi (Buy)",
            bbpDecision3: "Bermitra (Partner)",
            turn2_5Title: "Putaran 1: Tantangan Adopsi Karyawan",
            turn2_5Story: "Sistem baru sudah dipilih! Namun, beberapa staf tampak cemas dan resisten dengan perubahan ini. Apa yang akan Anda lakukan?",
            turn2_5Decision1: "Investasi Pelatihan & Komunikasi (-Rp 200.000)",
            turn2_5Decision2: "Biarkan Saja, Mereka Akan Terbiasa",
            turn3Title: "Putaran 2: Guncangan Pasar!",
            turn3Story: "Berita besar! Kompetitor 'Kopi Kilat' meluncurkan model bisnis langganan kopi mingguan yang viral. Pelanggan kita mulai melirik mereka. Bagaimana Anda merespons?",
            turn3Decision1: "Adaptasi Cepat: Buat program serupa (-Rp 300.000)",
            turn3Decision2: "Abaikan: Fokus pada rencana awal kita",
            turn4Title: "Putaran 3: Inisiatif Tahun Kedua",
            turn4Story: "Tantangan dari kompetitor semakin nyata. Inisiatif apa yang akan Anda jalankan selanjutnya untuk memperkuat posisi kita?",
            turn5Title: "Round 3: Implementation Approach",
            turn5Story: "Anda telah memilih untuk fokus pada [INISIATIF]. Bagaimana Anda akan mengimplementasikannya?",
            turn5_5Title: "Putaran 3: Tantangan Adopsi Karyawan",
            turn5_5Story: "Lagi, sistem baru akan diimplementasikan. Staf sudah lebih terbiasa, tapi tetap butuh arahan. Apa langkah Anda?",
            turn5_5Decision1: "Investasi Pelatihan Lanjutan (-Rp 200.000)",
            turn5_5Decision2: "Mereka Sudah Belajar, Biarkan Saja",
            turn6Title: "Putaran 4: 'Tagihan Susulan' Datang!",
            turn6Story: "Laporan dari tim IT: Dua sistem 'Beli' yang kita implementasikan dari vendor berbeda ternyata sulit diintegrasikan! Kita butuh konsultan untuk menyambungkannya.",
            turn6Decision1: "Bayar Konsultan Integrasi (-Rp 500.000)",
            turn7Title: "Laporan Kinerja Akhir",
            turn7Story: "Misi 2 tahun Anda telah selesai. Anda telah menghadapi berbagai tantangan dan membuat keputusan sulit. Mari kita lihat hasil akhir dari strategi Anda...",
            finalReportButton: "Main Lagi",
            logFocusSet: "Fokus strategis ditetapkan: ",
            logInitiativeChosen: "Inisiatif dipilih: ",
            logImplementationStarted: "Implementasi [${initiativeName} - ${choice}] dimulai. Dampak awal dicatat.",
            logFocusBonus: "Keputusan selaras dengan fokus! Mendapat bonus dampak 30%.",
            logBuildProblem: "Kabar Buruk! Proyek 'Build' mengalami kendala, biaya membengkak dan moral tim developer turun.",
            logTrainingInvest: "Anda berinvestasi dalam pelatihan. Staf merasa dihargai dan lebih siap menerima perubahan.",
            logTrainingIgnored: "Anda mengabaikan kekhawatiran staf. Timbul keresahan dan resistensi terhadap sistem baru.",
            logMarketAdapt: "Anda merespons cepat! Biaya keluar, tapi Anda berhasil menahan gempuran kompetitor.",
            logMarketIgnored: "Anda memilih fokus pada rencana awal. Pangsa pasar tergerus cukup dalam oleh kompetitor.",
            logTechDebtPaid: "Biaya integrasi dibayar. Tim IT lega masalahnya teratasi, tapi anggaran terpukul keras."
        }
    };

    // STATE PERMAINAN
    const gameState = {
        turn: -1,
        budget: 5000000,
        satisfaction: 55,
        morale: 60,
        marketShare: 20,
        strategicFocus: null,
        initiatives: {
            crm: { done: false, choice: null },
            ecommerce: { done: false, choice: null },
            pos: { done: false, choice: null }
        },
        techDebtRisk: false,
        activeInitiative: null,
        currentLanguage: localStorage.getItem('gameLanguage') || 'id'
    };

    // ELEMEN DOM
    const ui = {
        turnTitle: document.getElementById('turn-title'),
        storyText: document.getElementById('story-text'),
        decisionPanel: document.getElementById('decision-panel'),
        logList: document.getElementById('log-list'),
        budgetBar: document.getElementById('budget-bar'),
        satisfactionBar: document.getElementById('satisfaction-bar'),
        moraleBar: document.getElementById('morale-bar'),
        marketBar: document.getElementById('market-bar'),
        budgetValue: document.getElementById('budget-value'),
        satisfactionValue: document.getElementById('satisfaction-value'),
        moraleValue: document.getElementById('morale-value'),
        marketValue: document.getElementById('market-value'),
        taskModal: document.getElementById('task-modal'),
        showTaskBtn: document.getElementById('show-task-btn'),
        closeBtn: document.querySelector('.close-btn'),
        translateBtn: document.getElementById('translate-btn')
    };

    // KONTEN PERMAINAN (MENGGUNAKAN KUNCI TERJEMAHAN)
    const gameContent = {
        '-1': {
            titleKey: "missionBriefingTitle",
            storyKey: "missionBriefingStory",
            decisions: [
                { textKey: "missionBriefingDecision", action: () => advanceTurn(0) }
            ]
        },
        0: {
            titleKey: "turn0Title",
            storyKey: "turn0Story",
            decisions: [
                { textKey: "turn0Decision1", action: () => setFocus('loyalty') },
                { textKey: "turn0Decision2", action: () => setFocus('revenue') },
                { textKey: "turn0Decision3", action: () => setFocus('efficiency') }
            ]
        },
        1: {
            titleKey: "turn1Title",
            storyKey: "turn1Story",
            getDecisions: () => getAvailableInitiatives()
        },
        2: {
            titleKey: "turn2Title",
            storyKey: "turn2Story",
            getDecisions: () => getBbpDecisions()
        },
        2.5: {
            titleKey: "turn2_5Title",
            storyKey: "turn2_5Story",
            decisions: [
                { textKey: "turn2_5Decision1", action: () => handleChanceManagement(true) },
                { textKey: "turn2_5Decision2", action: () => handleChanceManagement(false) }
            ]
        },
        3: {
            titleKey: "turn3Title",
            storyKey: "turn3Story",
            decisions: [
                { textKey: "turn3Decision1", action: () => handleMarketEvent(true) },
                { textKey: "turn3Decision2", action: () => handleMarketEvent(false) }
            ]
        },
        4: {
            titleKey: "turn4Title",
            storyKey: "turn4Story",
            getDecisions: () => getAvailableInitiatives()
        },
        5: {
            titleKey: "turn5Title",
            storyKey: "turn5Story",
            getDecisions: () => getBbpDecisions()
        },
        5.5: {
            titleKey: "turn5_5Title",
            storyKey: "turn5_5Story",
            decisions: [
                { textKey: "turn5_5Decision1", action: () => handleChanceManagement(true) },
                { textKey: "turn5_5Decision2", action: () => handleChanceManagement(false) }
            ]
        },
        6: {
            titleKey: "turn6Title",
            storyKey: "turn6Story",
            decisions: [
                { textKey: "turn6Decision1", action: () => handleTechDebt() }
            ]
        },
        7: {
            titleKey: "turn7Title",
            storyKey: "turn7Story",
            getDecisions: () => getFinalReport()
        }
    };

    // FUNGSI INTI TERJEMAHAN
    function setLanguage(lang) {
        gameState.currentLanguage = lang;
        localStorage.setItem('gameLanguage', lang);
        document.documentElement.lang = lang;

        document.querySelectorAll('[data-translate-key]').forEach(el => {
            const key = el.dataset.translateKey;
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        ui.translateBtn.textContent = lang === 'id' ? 'English' : 'Bahasa Indonesia';
        renderTurn(gameState.turn);
    }

    // FUNGSI UTAMA PERMAINAN
    function updateDisplay() {
        ui.budgetValue.textContent = `Rp ${gameState.budget.toLocaleString('id-ID')}`;
        ui.budgetBar.style.width = `${(gameState.budget / 7000000) * 100}%`;
        ui.satisfactionValue.textContent = `${gameState.satisfaction}%`;
        ui.satisfactionBar.style.width = `${gameState.satisfaction}%`;
        ui.moraleValue.textContent = `${gameState.morale}%`;
        ui.moraleBar.style.width = `${gameState.morale}%`;
        ui.marketValue.textContent = `${gameState.marketShare}%`;
        ui.marketBar.style.width = `${gameState.marketShare}%`;
    }

    function renderTurn(turn) {
        const lang = gameState.currentLanguage;
        const t = translations[lang];
        const content = gameContent[turn];
        if (!content) return;

        ui.turnTitle.textContent = t[content.titleKey] || content.titleKey;
        ui.storyText.innerHTML = t[content.storyKey] || content.storyKey;

        if ((turn === 2 || turn === 5) && gameState.activeInitiative) {
            const initiativeName = getInitiativeName(gameState.activeInitiative);
            ui.storyText.innerHTML = ui.storyText.innerHTML.replace('[INISIATIF]', `<strong>${initiativeName}</strong>`);
        }

        ui.decisionPanel.innerHTML = '';
        let decisions = (typeof content.getDecisions === 'function') ? content.getDecisions() : content.decisions;

        decisions.forEach(decision => {
            const button = document.createElement('button');
            button.innerHTML = t[decision.textKey] || decision.textKey;
            button.onclick = decision.action;
            ui.decisionPanel.appendChild(button);
        });
        updateDisplay();
    }

    function log(messageKey, params = {}, type = 'info') {
        const lang = gameState.currentLanguage;
        let message = translations[lang][messageKey] || messageKey;

        for (const key in params) {
            message = message.replace(`\${${key}}`, params[key]);
        }

        const li = document.createElement('li');
        li.textContent = message;
        li.className = type;
        ui.logList.prepend(li);
    }

    function advanceTurn(nextTurn) {
        gameState.turn = nextTurn;
        const buyChoices = Object.values(gameState.initiatives).filter(i => i.choice === 'buy').length;

        if (nextTurn === 6 && buyChoices < 2) {
            advanceTurn(7);
        } else {
            renderTurn(gameState.turn);
        }
    }

    function setFocus(focus) {
        gameState.strategicFocus = focus;
        const focusMap = {
            loyalty: translations[gameState.currentLanguage].turn0Decision1,
            revenue: translations[gameState.currentLanguage].turn0Decision2,
            efficiency: translations[gameState.currentLanguage].turn0Decision3,
        }
        log("logFocusSet", {focus: focusMap[focus]});
        advanceTurn(1);
    }

    function chooseInitiative(initiativeKey) {
        gameState.activeInitiative = initiativeKey;
        log("logInitiativeChosen", {initiative: getInitiativeName(initiativeKey)});
        const nextTurn = Object.values(gameState.initiatives).filter(i=>i.done).length === 0 ? 2 : 5;
        advanceTurn(nextTurn);
    }

    function implementInitiative(choice) {
        const initiative = gameState.activeInitiative;
        gameState.initiatives[initiative].choice = choice;

        const impacts = {
            crm: { build: {b: -1800000, s: 25, m: -5, p: 5}, buy: {b: -800000, s: 15, m: 5, p: 3}, partner: {b: -400000, s: 10, m: 2, p: 2} },
            ecommerce: { build: {b: -2500000, s: 10, m: -10, p: 15}, buy: {b: -1000000, s: 5, m: 2, p: 10}, partner: {b: -600000, s: 3, m: 0, p: 8} },
            pos: { build: {b: -1500000, s: -5, m: -15, p: 0}, buy: {b: -700000, s: 5, m: 20, p: 2}, partner: {b: -500000, s: 2, m: 10, p: 1} }
        };

        let impact = impacts[initiative][choice];
        let focusMultiplier = 1.0;

        if ((gameState.strategicFocus === 'loyalty' && initiative === 'crm') || (gameState.strategicFocus === 'revenue' && initiative === 'ecommerce') || (gameState.strategicFocus === 'efficiency' && initiative === 'pos')) {
            focusMultiplier = 1.3;
            log("logFocusBonus", {}, "success");
        }

        gameState.budget += impact.b;
        gameState.satisfaction = Math.min(100, gameState.satisfaction + Math.round(impact.s * focusMultiplier));
        gameState.morale = Math.min(100, gameState.morale + Math.round(impact.m * focusMultiplier));
        gameState.marketShare = Math.min(100, gameState.marketShare + Math.round(impact.p * focusMultiplier));

        log("logImplementationStarted", {initiativeName: getInitiativeName(initiative), choice: choice});

        if (choice === 'build' && Math.random() < 0.25) {
            const penalty = { b: -300000, m: -10 };
            gameState.budget += penalty.b;
            gameState.morale += penalty.m;
            log("logBuildProblem", {}, "warning");
        }

        if (choice === 'buy') {
            if(gameState.techDebtRisk){
                // This is the second 'buy'
            } else {
                gameState.techDebtRisk = true;
            }
        }

        const nextTurn = Object.values(gameState.initiatives).filter(i=>i.done).length === 0 ? 2.5 : 5.5;
        advanceTurn(nextTurn);
    }

    function handleChanceManagement(invest) {
        gameState.initiatives[gameState.activeInitiative].done = true;
        if (invest) {
            gameState.budget -= 200000;
            gameState.morale = Math.min(100, gameState.morale + 10);
            log("logTrainingInvest", {}, "success");
        } else {
            gameState.morale = Math.max(0, gameState.morale - 10);
            log("logTrainingIgnored", {}, "warning");
        }
        const nextTurn = Object.values(gameState.initiatives).filter(i=>i.done).length === 1 ? 3 : 6;
        advanceTurn(nextTurn);
    }

    function handleMarketEvent(adapt) {
        if (adapt) {
            gameState.budget -= 300000;
            gameState.marketShare = Math.max(0, gameState.marketShare - 2);
            log("logMarketAdapt", {}, "success");
        } else {
            gameState.marketShare = Math.max(0, gameState.marketShare - 6);
            log("logMarketIgnored", {}, "warning");
        }
        advanceTurn(4);
    }

    function handleTechDebt() {
        gameState.budget -= 500000;
        gameState.morale = Math.min(100, gameState.morale + 5);
        log("logTechDebtPaid", {}, "warning");
        advanceTurn(7);
    }

    // FUNGSI HELPER
    function getInitiativeName(key) {
        const lang = gameState.currentLanguage;
        const keyMap = {
            crm: 'initiativeName_crm',
            ecommerce: 'initiativeName_ecommerce',
            pos: 'initiativeName_pos'
        };
        return translations[lang][keyMap[key]] || key;
    }

    function getAvailableInitiatives() {
        return Object.keys(gameState.initiatives)
            .filter(key => !gameState.initiatives[key].done)
            .map(key => ({ textKey: `initiativeName_${key}`, action: () => chooseInitiative(key) }));
    }

    function getBbpDecisions() {
        return [
            { textKey: "bbpDecision1", action: () => implementInitiative('build') },
            { textKey: "bbpDecision2", action: () => implementInitiative('buy') },
            { textKey: "bbpDecision3", action: () => implementInitiative('partner') }
        ];
    }

    function getFinalReport() {
        let score = (gameState.budget / 100000) + gameState.satisfaction + gameState.morale + gameState.marketShare;
        let feedback = "";
        const lang = gameState.currentLanguage;

        // Tambahkan feedback ke objek terjemahan juga untuk konsistensi
        if (score > 250) {
            feedback = lang === 'id' ? "Kinerja Visioner! Anda tidak hanya berhasil mentransformasi perusahaan, tetapi juga mengelola risiko manusiawi dan teknis dengan cemerlang. Sebuah pencapaian luar biasa." : "Visionary Performance! You not only successfully transformed the company but also brilliantly managed human and technical risks. An outstanding achievement.";
        } else if (score > 180) {
            feedback = lang === 'id' ? "Kinerja Strategis. Anda membuat keputusan solid dan berhasil melewati berbagai rintangan. Ada beberapa area yang bisa dioptimalkan, tetapi secara keseluruhan ini adalah sebuah kesuksesan yang nyata." : "Strategic Performance. You made solid decisions and successfully navigated various obstacles. Some areas could be optimized, but overall, this is a real success.";
        } else {
            feedback = lang === 'id' ? "Perjalanan yang Sulit. Realitas bisnis memang keras. Transformasi ini menghadapi banyak tantangan, baik dari pasar maupun dari dalam. Ini adalah pelajaran berharga tentang pentingnya mengelola risiko." : "A Difficult Journey. Business reality is tough. This transformation faced many challenges, both from the market and from within. This is a valuable lesson on the importance of risk management.";
        }

        const finalScoreText = lang === 'id' ? "Skor Kinerja Akhir Anda:" : "Your Final Performance Score:";
        ui.storyText.innerHTML = `<p>${finalScoreText} <strong>${Math.round(score)}</strong>.</p><p>${feedback}</p>`;
        return [{ textKey: "finalReportButton", action: () => window.location.reload() }];
    }

    // === LOGIKA UNTUK POPUP TUGAS ===
    ui.showTaskBtn.onclick = function() { ui.taskModal.style.display = "flex"; }
    ui.closeBtn.onclick = function() { ui.taskModal.style.display = "none"; }
    window.onclick = function(event) { if (event.target == ui.taskModal) { ui.taskModal.style.display = "none"; } }

    // === EVENT LISTENER UNTUK TOMBOL TERJEMAHAN ===
    ui.translateBtn.addEventListener('click', () => {
        const newLang = gameState.currentLanguage === 'id' ? 'en' : 'id';
        setLanguage(newLang);
    });

    // === MULAI PERMAINAN ===
    setLanguage(gameState.currentLanguage);
});