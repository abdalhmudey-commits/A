const dictionary = {
    mainTabs: {
      home: "Beranda",
      habits: "Kebiasaan",
      remembrances: "Dzikir",
      settings: "Pengaturan",
      notes: "Catatan",
    },
    settings: {
      title: "Pengaturan",
      language: "Bahasa",
      selectLanguage: "Pilih Bahasa",
      theme: "Tema",
      selectTheme: "Pilih Tema",
      light: "Terang",
      dark: "Gelap",
      notifications: "Notifikasi",
      notificationsEnabled: "Notifikasi berhasil diaktifkan!",
      notificationsDisabled: "Notifikasi telah dinonaktifkan.",
      notificationsDenied: "Izin notifikasi ditolak. Harap aktifkan di pengaturan browser Anda.",
    },
    remembrances: {
      morning: "Dzikir Pagi",
      evening: "Dzikir Petang",
      virtue: "Keutamaan",
    },
    habits: {
      newSetup: "Pengaturan Baru",
      myHabits: "Kebiasaan Saya",
      noHabitsTitle: "Tidak ada kebiasaan saat ini",
      noHabitsDescription: "Buka 'Pengaturan Baru' untuk mulai melacak kebiasaan pertama Anda.",
      deleteHabit: "Hapus Kebiasaan",
      habitDescriptionLabel: "Kebiasaan apa yang ingin Anda lacak?",
      habitDescriptionPlaceholder: "misalnya menggigit kuku, scrolling media sosial...",
      reminderFrequencyLabel: "Seberapa sering Anda ingin diingatkan?",
      every: "Setiap",
      intervalPlaceholder: "Nilai interval",
      unit: "Satuan",
      seconds: "Detik",
      minutes: "Menit",
      hours: "Jam",
      days: "Hari",
      reminderMessageLabel: "Isi pesan pengingat",
      reminderMessagePlaceholder: "Tulis pesan untuk diri sendiri (misalnya, Berhenti! Anda lebih kuat dari kebiasaan ini.)",
      audioReminderLabel: "Pengingat Audio (opsional)",
      recordAudio: "Rekam Audio",
      uploadAudio: "Unggah File Audio",
      deleteAudio: "Hapus Audio",
      saveHabit: "Tambah Kebiasaan Baru",
      recordingToastTitle: "Perekaman dimulai...",
      recordingToastDescription: "Bicaralah sekarang.",
      micErrorToastTitle: "Kesalahan Akses Mikrofon",
      micErrorToastDescription: "Harap pastikan Anda telah mengizinkan akses mikrofon di pengaturan browser Anda.",
      invalidFileToastTitle: "File Tidak Valid",
      invalidFileToastDescription: "Silakan pilih file audio.",
      missingFieldsToastTitle: "Bidang yang Hilang",
      missingFieldsToastDescription: "Harap isi deskripsi kebiasaan dan konten pesan pengingat.",
      habitAddedToastTitle: "Kebiasaan berhasil ditambahkan!",
      habitAddedToastDescription: "Anda dapat melihat kebiasaan baru Anda di tab 'Kebiasaan Saya'.",
      enableNotificationsFirst: "Harap aktifkan notifikasi dari pengaturan terlebih dahulu.",
       intervalUnit: {
        seconds: { singular: "detik", plural: "detik" },
        minutes: { singular: "menit", plural: "menit" },
        hours: { singular: "jam", plural: "jam" },
        days: { singular: "hari", plural: "hari" },
      }
    },
    home: {
      previous: "Sebelumnya",
      next: "Berikutnya",
      summarizeBook: "Rangkumkan sebuah buku untukku",
      loadingSummary: "Meringkas...",
      summaryBy: "Oleh: ",
      errorTitle: "Kesalahan",
      errorAuthor: "Sistem",
      errorSummary: "Maaf, kami tidak dapat merangkum buku saat ini. Silakan coba lagi nanti.",
    },
    notes: {
        title: "Mencatat",
        description: "Tuliskan pemikiran, tujuan, atau apa pun yang menginspirasi Anda di sini.",
        placeholder: "Mulai menulis...",
        saved: "Tersimpan."
    },
    remembrancesData: {
      morningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
            translation: 'Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.\nAllah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa\'at di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. [Ayat Kursi, Al-Baqarah 255]',
            count: 1,
            virtue: 'Barangsiapa membacanya di pagi hari maka ia akan dilindungi dari jin hingga sore hari, dan barangsiapa membacanya di sore hari maka ia akan dilindungi dari mereka hingga pagi hari.'
        },
        {
            id: 2,
            arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
            translation: 'Katakanlah: Dialah Allah, Yang Maha Esa... * Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh... * Katakanlah: Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia...',
            count: 3,
            virtue: 'Barangsiapa membacanya tiga kali di pagi dan sore hari, maka itu akan mencukupinya dari segala sesuatu.'
        },
        {
            id: 3,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'Kami telah memasuki waktu pagi dan kerajaan hanyalah milik Allah, segala puji bagi Allah. Tidak ada Tuhan (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian. Dia-lah Yang Maha Kuasa atas segala sesuatu. Wahai Tuhanku, aku memohon kepada-Mu kebaikan hari ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini dan kejahatan sesudahnya. Wahai Tuhanku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Tuhanku, aku berlindung kepada-Mu dari siksa di neraka dan siksa di dalam kubur.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ النُّشُورُ.',
            translation: 'Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu sore. Dengan rahmat dan kehendak-Mu kami hidup dan dengan rahmat dan kehendak-Mu kami mati. Dan kepada-Mu kebangkitan (bagi semua makhluk).',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak disembah selain Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu. Aku akan setia pada perjanjianku dengan-Mu dan janji-Mu semampuku. Aku berlindung kepada-Mu dari kejahatan yang telah aku perbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sesungguhnya tidak ada yang dapat mengampuni dosa selain Engkau.',
            count: 1,
            virtue: 'Barangsiapa mengucapkannya dengan yakin di pagi hari lalu ia meninggal pada hari itu, maka ia akan masuk surga. Dan barangsiapa mengucapkannya dengan yakin di sore hari lalu ia meninggal pada malam itu, maka ia akan masuk surga.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'Ya Allah, sesungguhnya di pagi hari ini aku mempersaksikan Engkau, para pemikul Arsy-Mu, para malaikat-Mu, dan seluruh makhluk-Mu, bahwa Engkau adalah Allah, tidak ada Tuhan yang berhak disembah selain Engkau semata, tidak ada sekutu bagi-Mu, dan bahwa Muhammad adalah hamba dan utusan-Mu.',
            count: 4,
            virtue: 'Barangsiapa mengucapkannya empat kali di pagi atau sore hari, Allah akan membebaskannya dari api neraka.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'Ya Allah, nikmat apapun yang aku terima atau diterima oleh salah seorang dari makhluk-Mu di pagi ini adalah dari-Mu semata, tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan bagi-Mu segala syukur.',
            count: 1,
            virtue: 'Barangsiapa mengucapkannya di pagi hari, ia telah menunaikan syukurnya hari itu. Dan barangsiapa mengucapkannya di sore hari, ia telah menunaikan syukurnya malam itu.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي sَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'Ya Allah, sehatkanlah badanku. Ya Allah, sehatkanlah pendengaranku. Ya Allah, sehatkanlah penglihatanku. Tidak ada Tuhan yang berhak disembah selain Engkau. Ya Allah, aku berlindung kepada-Mu dari kekafiran dan kefakiran. Aku berlindung kepada-Mu dari siksa kubur. Tidak ada Tuhan yang berhak disembah selain Engkau.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Cukuplah Allah bagiku. Tidak ada Tuhan yang berhak disembah selain Dia. Kepada-Nya aku bertawakal dan Dia adalah Tuhan Arsy yang agung.',
            count: 7,
            virtue: 'Barangsiapa mengucapkannya tujuh kali di pagi dan sore hari, Allah akan mencukupkan segala urusannya di dunia dan akhirat.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan di dunia dan akhirat. Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan dalam agamaku, duniaku, keluargaku, dan hartaku. Ya Allah, tutupilah aibku dan amankanlah rasa takutku. Ya Allah, jagalah aku dari depanku, dari belakangku, dari kananku, dari kiriku, dan dari atasku. Aku berlindung dengan keagungan-Mu dari (bahaya) yang datang dari bawahku.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'Ya Allah, Yang Mengetahui yang gaib dan yang nyata, Pencipta langit dan bumi, Tuhan dan Penguasa segala sesuatu. Aku bersaksi bahwa tidak ada Tuhan yang berhak disembah selain Engkau. Aku berlindung kepada-Mu dari kejahatan diriku, dari kejahatan setan dan sekutunya, dan dari berbuat keburukan terhadap diriku atau menyebabkannya menimpa seorang muslim.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'Dengan nama Allah, yang dengan nama-Nya tidak ada sesuatu pun di bumi maupun di langit yang dapat memberi mudharat, dan Dia Maha Mendengar lagi Maha Mengetahui.',
            count: 3,
            virtue: 'Barangsiapa mengucapkannya tiga kali di pagi dan sore hari, tidak ada sesuatu pun yang akan membahayakannya.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'Aku ridha Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad (semoga Allah melimpahkan shalawat dan salam kepadanya) sebagai Nabiku.',
            count: 3,
            virtue: 'Barangsiapa mengucapkannya tiga kali di pagi dan sore hari, maka Allah berhak untuk meridhainya pada hari kiamat.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: 'Wahai Yang Maha Hidup, wahai Yang Maha Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan. Perbaikilah segala urusanku dan janganlah Engkau serahkan aku kepada diriku sendiri walau sekejap mata.',
            count: 3,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذَا الْيَوْمِ: فَتْحَهُ، وَنَصْرَهُ، وَنُورَهُ، وَبَرَكَتَهُ، وَهُدَاهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهِ وَشَرِّ مَا بَعْدَهُ.',
            translation: 'Kami telah memasuki waktu pagi, dan kerajaan adalah milik Allah, Tuhan semesta alam. Ya Allah, aku memohon kepada-Mu kebaikan hari ini: kemenangannya, pertolongannya, cahayanya, keberkahannya, dan petunjuknya. Aku berlindung kepada-Mu dari kejahatan yang ada di dalamnya dan kejahatan sesudahnya.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَصْبَحْna عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'Kami memasuki pagi hari di atas fitrah Islam, di atas kalimat ikhlas, di atas agama Nabi kami Muhammad (semoga Allah melimpahkan shalawat dan salam kepadanya), dan di atas millah (agama) bapak kami Ibrahim, yang lurus lagi berserah diri, dan ia bukanlah termasuk orang-orang musyrik.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Maha Suci Allah dan segala puji bagi-Nya.',
            count: 100,
            virtue: 'Barangsiapa mengucapkannya seratus kali di pagi dan sore hari, tidak ada seorang pun yang datang pada hari kiamat dengan sesuatu yang lebih baik dari apa yang ia bawa, kecuali seseorang yang mengucapkan hal yang sama atau lebih banyak.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'Tidak ada Tuhan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.',
            count: 10,
            virtue: 'Barangsiapa mengucapkannya sepuluh kali, maka baginya setara dengan memerdekakan sepuluh budak, dan akan dituliskan baginya seratus kebaikan, dan akan dihapuskan darinya seratus keburukan, dan itu akan menjadi pelindung baginya dari setan pada hari itu hingga sore, dan tidak ada seorang pun yang datang dengan sesuatu yang lebih baik dari apa yang ia bawa, kecuali seseorang yang beramal lebih banyak darinya.'
        },
        {
            id: 19,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ.',
            translation: 'Maha Suci Allah dan segala puji bagi-Nya, sebanyak jumlah makhluk-Nya, seridha diri-Nya, seberat timbangan Arsy-Nya, dan sebanyak tinta kalimat-Nya.',
            count: 3,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْماً نَافِعاً، وَرِزْقاً طَيِّباً، وَعَمَلاً مُتَقَبَّلاً.',
            translation: 'Ya Allah, aku memohon kepada-Mu ilmu yang bermanfaat, rezeki yang baik, dan amalan yang diterima.',
            count: 1,
            virtue: ''
        },
        {
            id: 21,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'Aku memohon ampun kepada Allah dan bertaubat kepada-Nya.',
            count: 100,
            virtue: ''
        },
        {
            id: 22,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'Ya Allah, limpahkanlah shalawat dan salam kepada Nabi kami Muhammad.',
            count: 10,
            virtue: 'Barangsiapa bershalawat kepadaku sepuluh kali di pagi hari dan sepuluh kali di sore hari, ia akan mendapatkan syafaatku pada hari kiamat.'
        }
      ],
      eveningRemembrances: [
        {
            id: 1,
            arabicText: 'أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ\nاللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَن ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْfَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلاَّ بِمَا شَاء وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَؤُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ. [آية الكرسى - البقرة 255]',
            translation: 'Aku berlindung kepada Allah dari godaan syaitan yang terkutuk.\nAllah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa\'at di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar. [Ayat Kursi, Al-Baqarah 255]',
            count: 1,
            virtue: 'Barangsiapa membacanya di sore hari maka ia akan dilindungi dari jin hingga pagi hari, dan barangsiapa membacanya di pagi hari maka ia akan dilindungi dari mereka hingga sore hari.'
        },
        {
            id: 2,
            arabicText: 'قُلْ هُوَ اللَّهُ أَحَدٌ.. * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ.. * قُلْ أَعُوذُ بِرَبِّ النَّاسِ..',
            translation: 'Katakanlah: Dialah Allah, Yang Maha Esa... * Katakanlah: Aku berlindung kepada Tuhan Yang Menguasai subuh... * Katakanlah: Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia...',
            count: 3,
            virtue: 'Barangsiapa membacanya tiga kali di pagi dan sore hari, maka itu akan mencukupinya dari segala sesuatu.'
        },
        {
            id: 3,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَsْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ.',
            translation: 'Kami telah memasuki waktu sore dan kerajaan hanyalah milik Allah, segala puji bagi Allah. Tidak ada Tuhan (yang berhak disembah) kecuali Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian. Dia-lah Yang Maha Kuasa atas segala sesuatu. Wahai Tuhanku, aku memohon kepada-Mu kebaikan malam ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan malam ini dan kejahatan sesudahnya. Wahai Tuhanku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Tuhanku, aku berlindung kepada-Mu dari siksa di neraka dan siksa di dalam kubur.',
            count: 1,
            virtue: ''
        },
        {
            id: 4,
            arabicText: 'اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ وَإِلَيْكَ الْمَصِيرُ.',
            translation: 'Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu sore, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi. Dengan rahmat dan kehendak-Mu kami hidup dan dengan rahmat dan kehendak-Mu kami mati. Dan kepada-Mu tempat kembali (bagi semua makhluk).',
            count: 1,
            virtue: ''
        },
        {
            id: 5,
            arabicText: 'اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إِلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إِلاَّ أَنْتَ.',
            translation: 'Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan yang berhak disembah selain Engkau. Engkau telah menciptakanku dan aku adalah hamba-Mu. Aku akan setia pada perjanjianku dengan-Mu dan janji-Mu semampuku. Aku berlindung kepada-Mu dari kejahatan yang telah aku perbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku, maka ampunilah aku. Sesungguhnya tidak ada yang dapat mengampuni dosa selain Engkau.',
            count: 1,
            virtue: 'Barangsiapa mengucapkannya dengan yakin di sore hari lalu ia meninggal pada malam itu, maka ia akan masuk surga. Dan barangsiapa mengucapkannya dengan yakin di pagi hari lalu ia meninggal pada hari itu, maka ia akan masuk surga.'
        },
        {
            id: 6,
            arabicText: 'اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ، وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ، وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إِلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّداً عَبْدُكَ وَرَسُولُكَ.',
            translation: 'Ya Allah, sesungguhnya di sore hari ini aku mempersaksikan Engkau, para pemikul Arsy-Mu, para malaikat-Mu, dan seluruh makhluk-Mu, bahwa Engkau adalah Allah, tidak ada Tuhan yang berhak disembah selain Engkau semata, tidak ada sekutu bagi-Mu, dan bahwa Muhammad adalah hamba dan utusan-Mu.',
            count: 4,
            virtue: 'Barangsiapa mengucapkannya empat kali di sore atau pagi hari, Allah akan membebaskannya dari api neraka.'
        },
        {
            id: 7,
            arabicText: 'اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.',
            translation: 'Ya Allah, nikmat apapun yang aku terima atau diterima oleh salah seorang dari makhluk-Mu di sore ini adalah dari-Mu semata, tiada sekutu bagi-Mu. Maka bagi-Mu segala puji dan bagi-Mu segala syukur.',
            count: 1,
            virtue: 'Barangsiapa mengucapkannya di sore hari, ia telah menunaikan syukurnya malam itu. Dan barangsiapa mengucapkannya di pagi hari, ia telah menunaikan syukurnya hari itu.'
        },
        {
            id: 8,
            arabicText: 'اللَّهُمَّ عَافِنِي فِي بَدَنِي، اللَّهُمَّ عَافِنِي فِي سَمْعِي، اللَّهُمَّ عَافِنِي فِي بَصَرِي، لاَ إِلَهَ إِلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالْفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَهَ إِلاَّ أَنْتَ.',
            translation: 'Ya Allah, sehatkanlah badanku. Ya Allah, sehatkanlah pendengaranku. Ya Allah, sehatkanlah penglihatanku. Tidak ada Tuhan yang berhak disembah selain Engkau. Ya Allah, aku berlindung kepada-Mu dari kekafiran dan kefakiran. Aku berlindung kepada-Mu dari siksa kubur. Tidak ada Tuhan yang berhak disembah selain Engkau.',
            count: 3,
            virtue: ''
        },
        {
            id: 9,
            arabicText: 'حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.',
            translation: 'Cukuplah Allah bagiku. Tidak ada Tuhan yang berhak disembah selain Dia. Kepada-Nya aku bertawakal dan Dia adalah Tuhan Arsy yang agung.',
            count: 7,
            virtue: 'Barangsiapa mengucapkannya tujuh kali di sore dan pagi hari, Allah akan mencukupkan segala urusannya di dunia dan akhirat.'
        },
        {
            id: 10,
            arabicText: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي.',
            translation: 'Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan di dunia dan akhirat. Ya Allah, aku memohon kepada-Mu ampunan dan keselamatan dalam agamaku, duniaku, keluargaku, dan hartaku. Ya Allah, tutupilah aibku dan amankanlah rasa takutku. Ya Allah, jagalah aku dari depanku, dari belakangku, dari kananku, dari kiriku, dan dari atasku. Aku berlindung dengan keagungan-Mu dari (bahaya) yang datang dari bawahku.',
            count: 1,
            virtue: ''
        },
        {
            id: 11,
            arabicText: 'اللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي sُوءاً، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ.',
            translation: 'Ya Allah, Yang Mengetahui yang gaib dan yang nyata, Pencipta langit dan bumi, Tuhan dan Penguasa segala sesuatu. Aku bersaksi bahwa tidak ada Tuhan yang berhak disembah selain Engkau. Aku berlindung kepada-Mu dari kejahatan diriku, dari kejahatan setan dan sekutunya, dan dari berbuat keburukan terhadap diriku atau menyebabkannya menimpa seorang muslim.',
            count: 1,
            virtue: ''
        },
        {
            id: 12,
            arabicText: 'بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.',
            translation: 'Dengan nama Allah, yang dengan nama-Nya tidak ada sesuatu pun di bumi maupun di langit yang dapat memberi mudharat, dan Dia Maha Mendengar lagi Maha Mengetahui.',
            count: 3,
            virtue: 'Barangsiapa mengucapkannya tiga kali di sore dan pagi hari, tidak ada sesuatu pun yang akan membahayakannya.'
        },
        {
            id: 13,
            arabicText: 'رَضِيتُ بِاللَّهِ رَبَّاً، وَبِالإِسْلاَمِ دِيناً، وَبِمُحَمَّدٍ صلى الله عليه وسلم نَبِيّاً.',
            translation: 'Aku ridha Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad (semoga Allah melimpahkan shalawat dan salam kepadanya) sebagai Nabiku.',
            count: 3,
            virtue: 'Barangsiapa mengucapkannya tiga kali di sore dan pagi hari, maka Allah berhak untuk meridhainya pada hari kiamat.'
        },
        {
            id: 14,
            arabicText: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.',
            translation: 'Wahai Yang Maha Hidup, wahai Yang Maha Berdiri Sendiri, dengan rahmat-Mu aku memohon pertolongan. Perbaikilah segala urusanku dan janganlah Engkau serahkan aku kepada diriku sendiri walau sekejap mata.',
            count: 1,
            virtue: ''
        },
        {
            id: 15,
            arabicText: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ رَبِّ الْعَالَمِينَ، اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ هَذِهِ اللَّيْلَةِ: فَتْحَهَا، وَنَصْرَهَا، وَنُورَهَا، وَبَرَكَتَهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِيهَا وَشَرِّ مَا بَعْدَهَا.',
            translation: 'Kami telah memasuki waktu sore, dan kerajaan adalah milik Allah, Tuhan semesta alam. Ya Allah, aku memohon kepada-Mu kebaikan malam ini: kemenangannya, pertolongannya, cahayanya, keberkahannya, dan petunjuknya. Aku berlindung kepada-Mu dari kejahatan yang ada di dalamnya dan kejahatan sesudahnya.',
            count: 1,
            virtue: ''
        },
        {
            id: 16,
            arabicText: 'أَمْسَيْna عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صلى الله عليه وسلم، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ، حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ الْمُشْرِكِينَ.',
            translation: 'Kami memasuki sore hari di atas fitrah Islam, di atas kalimat ikhlas, di atas agama Nabi kami Muhammad (semoga Allah melimpahkan shalawat dan salam kepadanya), dan di atas millah (agama) bapak kami Ibrahim, yang lurus lagi berserah diri, dan ia bukanlah termasuk orang-orang musyrik.',
            count: 1,
            virtue: ''
        },
        {
            id: 17,
            arabicText: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ.',
            translation: 'Maha Suci Allah dan segala puji bagi-Nya.',
            count: 100,
            virtue: 'Barangsiapa mengucapkannya seratus kali di sore dan pagi hari, tidak ada seorang pun yang datang pada hari kiamat dengan sesuatu yang lebih baik dari apa yang ia bawa, kecuali seseorang yang mengucapkan hal yang sama atau lebih banyak.'
        },
        {
            id: 18,
            arabicText: 'لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.',
            translation: 'Tidak ada Tuhan yang berhak disembah selain Allah semata, tiada sekutu bagi-Nya. Bagi-Nya kerajaan dan bagi-Nya pujian, dan Dia Maha Kuasa atas segala sesuatu.',
            count: 10,
            virtue: 'Barangsiapa mengucapkannya sepuluh kali, maka baginya setara dengan memerdekakan sepuluh budak, dan akan dituliskan baginya seratus kebaikan, dan akan dihapuskan darinya seratus keburukan, dan itu akan menjadi pelindung baginya dari setan pada malam itu hingga pagi, dan tidak ada seorang pun yang datang dengan sesuatu yang lebih baik dari apa yang ia bawa, kecuali seseorang yang beramal lebih banyak darinya.'
        },
        {
            id: 19,
            arabicText: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ.',
            translation: 'Aku memohon ampun kepada Allah dan bertaubat kepada-Nya.',
            count: 100,
            virtue: ''
        },
        {
            id: 20,
            arabicText: 'أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.',
            translation: 'Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang Dia ciptakan.',
            count: 3,
            virtue: 'Barangsiapa mengucapkannya tiga kali di sore hari, ia tidak akan dirugikan oleh sengatan ular pada malam itu.'
        },
        {
            id: 21,
            arabicText: 'اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبَيِّنَا مُحَمَّدٍ.',
            translation: 'Ya Allah, limpahkanlah shalawat dan salam kepada Nabi kami Muhammad.',
            count: 10,
            virtue: 'Barangsiapa bershalawat kepadaku sepuluh kali di sore hari dan sepuluh kali di pagi hari, ia akan mendapatkan syafaatku pada hari kiamat.'
        }
      ]
    }
  };
export default dictionary;
