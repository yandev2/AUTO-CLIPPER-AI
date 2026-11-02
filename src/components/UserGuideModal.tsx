import React, { useState } from 'react';
import styles from './UserGuideModal.module.css';
import {
  X,
  BookOpen,
  Cpu,
  ShieldCheck,
  Video,
  Layers,
  Sparkles,
  Zap,
  HelpCircle,
  CheckCircle2,
  Lock,
  Flame,
  Scissors
} from 'lucide-react';
import { useLanguage } from '../locales';

interface UserGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type GuideTab = 'workflow' | 'ai_engine' | 'studio' | 'hardware' | 'security' | 'tips';

export function UserGuideModal({ isOpen, onClose }: UserGuideModalProps): React.ReactElement | null {
  const { language } = useLanguage();
  const isId = language === 'id';
  const [activeTab, setActiveTab] = useState<GuideTab>('workflow');

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.card} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.headerIcon}>
              <BookOpen size={17} />
            </div>
            <div>
              <h2 className={styles.title}>
                {isId ? 'Panduan Penggunaan & Cara Kerja Sistem' : 'System Architecture & User Guide'}
                <span className={styles.tagBadge}>v2.0.0</span>
              </h2>
              <p className={styles.subtitle}>
                {isId
                  ? 'Panduan lengkap cara kerja Clipper AI, deteksi heatmap, dan rendering lokal'
                  : 'Complete handbook on Clipper AI workflow, heatmap detection, and local rendering'}
              </p>
            </div>
          </div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Tutup"
          >
            <X size={16} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className={styles.navTabs}>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'workflow' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('workflow')}
          >
            <Video size={13} />
            {isId ? '1. Alur Kerja Utama' : '1. Core Workflow'}
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'ai_engine' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('ai_engine')}
          >
            <Sparkles size={13} />
            {isId ? '2. Analisis AI & Heatmap' : '2. AI & Heatmap'}
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'studio' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('studio')}
          >
            <Layers size={13} />
            {isId ? '3. Studio & Reframe 9:16' : '3. Studio & Reframe'}
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'hardware' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('hardware')}
          >
            <Cpu size={13} />
            {isId ? '4. Hardware Accel' : '4. Hardware Accel'}
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'security' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('security')}
          >
            <ShieldCheck size={13} />
            {isId ? '5. Keamanan & Privasi' : '5. Security & Privacy'}
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${activeTab === 'tips' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('tips')}
          >
            <HelpCircle size={13} />
            {isId ? '6. Tips & Trik' : '6. Tips & FAQ'}
          </button>
        </div>

        {/* Body Content */}
        <div className={styles.body}>
          {/* TAB 1: WORKFLOW */}
          {activeTab === 'workflow' && (
            <>
              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <Video size={16} style={{ color: 'var(--primary)' }} />
                    {isId ? 'Tahapan Alur Kerja Clipper AI' : 'End-to-End Clipper Workflow'}
                  </span>
                  <span className={styles.tagBadge}>{isId ? '3 Langkah Utama' : '3 Core Steps'}</span>
                </div>
                <p>
                  {isId
                    ? 'Clipper AI memproses video panjang (podcast, live streaming, gameplay, tutorial) menjadi klip pendek vertikal viral siap unggah ke TikTok, Shorts, dan Reels secara otomatis:'
                    : 'Clipper AI transforms long-form videos (podcasts, streams, gaming, tutorials) into viral short-form 9:16 vertical clips ready for TikTok, Shorts, and Reels:'}
                </p>

                <div className={styles.stepGrid}>
                  <div className={styles.stepCard}>
                    <span className={styles.stepNum}>STEP 01</span>
                    <span className={styles.stepTitle}>{isId ? 'Sumber & Ingest Video' : 'Input & Ingestion'}</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'Masukkan URL YouTube, link VOD/Klip Twitch, Google Drive sharing link, atau unggah file video lokal langsung dari komputer Anda.'
                        : 'Provide a YouTube link, Twitch VOD/clip, Google Drive link, or upload local video files directly from your computer.'}
                    </span>
                  </div>

                  <div className={styles.stepCard}>
                    <span className={styles.stepNum}>STEP 02</span>
                    <span className={styles.stepTitle}>{isId ? 'Analisis & Kurasi AI' : 'AI Analysis & Curation'}</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'AI memindai transkrip dialog yang diselaraskan dengan lonjakan grafik replay penonton (heatmap) untuk menemukan momen puncak berdaya tarik tinggi.'
                        : 'AI synchronizes dialog transcripts with audience replay peaks to extract high-retention moments with strong hooks.'}
                    </span>
                  </div>

                  <div className={styles.stepCard}>
                    <span className={styles.stepNum}>STEP 03</span>
                    <span className={styles.stepTitle}>{isId ? 'Studio & Render Otomatis' : 'Studio & Rendering'}</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'Atur layout 9:16 (Auto-FaceCam tracking), subtitle karaoke dinamis, font, BGM, dan render cepat menggunakan GPU Hardware Acceleration.'
                        : 'Configure vertical 9:16 layouts, AI facecam tracking, dynamic karaoke subtitles, BGM ducking, and render via GPU acceleration.'}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.infoNotice}>
                <CheckCircle2 size={16} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>{isId ? 'Semua Pemrosesan Berjalan Lokal' : 'All Processing Runs Locally'}:</strong>{' '}
                  {isId
                    ? 'Video tidak diunggah ke cloud pihak ketiga. Rendering FFmpeg dan deteksi wajah OpenCV berjalan langsung pada mesin komputer Anda.'
                    : 'Videos are not uploaded to external clouds. FFmpeg rendering and OpenCV face tracking execute directly on your local machine.'}
                </div>
              </div>
            </>
          )}

          {/* TAB 2: AI & HEATMAP */}
          {activeTab === 'ai_engine' && (
            <>
              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <Flame size={16} style={{ color: '#f97316' }} />
                    {isId ? 'Bagaimana AI Menemukan Momen Viral?' : 'How AI Detects Viral Moments'}
                  </span>
                  <span className={styles.tagBadge}>Heatmap + LLM</span>
                </div>
                <p>
                  {isId
                    ? 'Sistem menggabungkan data empiris retensi penonton nyata dengan pemahaman semantik kecerdasan buatan:'
                    : 'The engine synergizes real audience retention telemetry with LLM semantic understanding:'}
                </p>

                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[1]</span>
                    <div>
                      <strong>{isId ? 'Audience Retention Heatmap (YouTube Telemetry)' : 'Audience Retention Heatmap'}:</strong>{' '}
                      {isId
                        ? 'Mengekstrak kurva replay penonton YouTube (nilai 0.0 s/d 1.0) untuk mendeteksi detik-detik spesifik di mana penonton paling sering memutar ulang video.'
                        : 'Extracts real viewer replay intensity curves (0.0 to 1.0) to pinpoint the exact timestamps where audiences replay the video most.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[2]</span>
                    <div>
                      <strong>{isId ? 'Pemahaman Konteks Dialog (LLM Gemini / OpenRouter)' : 'Semantic Dialog Context (Gemini / OpenRouter)'}:</strong>{' '}
                      {isId
                        ? 'AI memastikan klip memiliki struktur cerita utuh: Hook pembuka yang memancing rasa penasaran, isi bahasan yang berbobot, dan punchline/penutup tanpa kalimat yang terpotong canggung.'
                        : 'The LLM ensures narrative completeness: a curiosity hook, engaging body discourse, and clean closure without awkward sentence cutoffs.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[3]</span>
                    <div>
                      <strong>{isId ? 'Skor Viralitas (Virality Score)' : 'Virality Scoring'}:</strong>{' '}
                      {isId
                        ? 'Setiap klip dinilai dari rentang 1-100 berdasarkan kekuatan hook, emosi/humor, dan kerapatan puncak heatmap penonton.'
                        : 'Each clip is ranked 1-100 based on hook strength, emotional resonance, and retention curve correlation.'}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <Scissors size={16} style={{ color: 'var(--primary)' }} />
                    {isId ? 'Fitur Clip Trimmer & Context Editor' : 'Clip Trimmer & Context Editor'}
                  </span>
                </div>
                <p>
                  {isId
                    ? 'Sebelum merender, Anda dapat membuka modal "Sesuaikan Klip & Konteks" untuk memangkas awal/akhir klip secara presisi menggunakan tombol Nudge (-30s, -15s, -5s, +5s, +15s, +30s) agar tidak ada konteks penting yang terlewat.'
                    : 'Before rendering, open the "Adjust Clip & Context" modal to nudge start and end times precisely (-30s, -15s, -5s, +5s, +15s, +30s) ensuring zero lost context.'}
                </p>
              </div>
            </>
          )}

          {/* TAB 3: STUDIO & REFRAME */}
          {activeTab === 'studio' && (
            <>
              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <Layers size={16} style={{ color: 'var(--primary)' }} />
                    {isId ? 'Fitur Studio Auto-Clipper 9:16' : 'Studio Auto-Clipper 9:16 Features'}
                  </span>
                  <span className={styles.tagBadge}>Full Customization</span>
                </div>

                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>•</span>
                    <div>
                      <strong>{isId ? 'AI FaceCam Tracking (OpenCV YuNet ONNX)' : 'AI FaceCam Tracking (OpenCV YuNet)'}:</strong>{' '}
                      {isId
                        ? 'Mendeteksi otomatis wajah streamer atau pembicara pada video untuk layout Split Vertikal (Kamera di atas, gameplay/presentasi di bawah) tanpa perlu crop manual.'
                        : 'Automatically detects speaker or streamer faces using neural net cascades for vertical split layouts (facecam on top, gameplay on bottom).'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>•</span>
                    <div>
                      <strong>{isId ? 'Pilihan Layout 9:16' : '9:16 Layout Options'}:</strong>{' '}
                      {isId
                        ? 'Mendukung Split Screen (FaceCam + Gameplay), Single Full Crop, Blur Backdrop (latar buram estetik), dan Letterbox/Pillarbox.'
                        : 'Supports Split Screen (FaceCam + Gameplay), Full Single Crop, Ambient Blur Backdrop, and Letterbox/Pillarbox.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>•</span>
                    <div>
                      <strong>{isId ? 'Subtitle Karaoke Dinamis (ASS Subtitles)' : 'Dynamic Karaoke Subtitles (ASS)'}:</strong>{' '}
                      {isId
                        ? 'Membuat teks otomatis dengan efek highlight kata demi kata saat diucapkan, posisi teks yang bisa digeser, dan font kustom (Anton, Bebas Neue, Montserrat, Poppins, Outfit, Inter).'
                        : 'Generates word-by-word highlighted captions with customizable vertical positioning and typography.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>•</span>
                    <div>
                      <strong>{isId ? 'Audio BGM Ducking & Sound Effects' : 'Audio BGM Ducking & SFX'}:</strong>{' '}
                      {isId
                        ? 'Unggah musik latar dengan volume ducking otomatis (mengecil saat ada suara pembicara) serta sound effect pembuka.'
                        : 'Upload background music with automatic speech-aware ducking and transition sound effects.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>•</span>
                    <div>
                      <strong>{isId ? 'Batch Rendering Cepat' : 'Batch Rendering'}:</strong>{' '}
                      {isId
                        ? 'Pilih beberapa klip sekaligus dan jalankan render antrean di latar belakang dengan live progress status.'
                        : 'Select multiple clips and render them sequentially in the background with live progress indicators.'}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 4: HARDWARE ACCELERATION */}
          {activeTab === 'hardware' && (
            <>
              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <Zap size={16} style={{ color: '#eab308' }} />
                    {isId ? 'Akselerasi Perangkat Keras GPU' : 'GPU Hardware Acceleration'}
                  </span>
                  <span className={styles.tagBadge}>FFmpeg + WebCodecs</span>
                </div>
                <p>
                  {isId
                    ? 'Clipper AI secara otomatis mendeteksi encoder GPU yang didukung pada sistem komputer Anda untuk mempercepat ekspor klip hingga 5-10x lipat:'
                    : 'Clipper AI automatically detects hardware encoders supported on your machine for 5-10x faster exports:'}
                </p>

                <div className={styles.stepGrid}>
                  <div className={styles.stepCard}>
                    <span className={styles.stepNum} style={{ color: '#22c55e' }}>NVIDIA GPU</span>
                    <span className={styles.stepTitle}>NVIDIA NVENC (<span className={styles.codeChip}>h264_nvenc</span>)</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'Ideal untuk kartu grafis NVIDIA GeForce GTX/RTX. Render sangat cepat dengan beban CPU minimal.'
                        : 'Optimized for NVIDIA GeForce GTX/RTX GPUs. Super fast rendering with negligible CPU load.'}
                    </span>
                  </div>

                  <div className={styles.stepCard}>
                    <span className={styles.stepNum} style={{ color: '#06b6d4' }}>INTEL GPU</span>
                    <span className={styles.stepTitle}>Intel QuickSync (<span className={styles.codeChip}>h264_qsv</span>)</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'Memanfaatkan encoder terintegrasi Intel UHD/Iris/Arc pada prosesor Intel generasi 6 ke atas.'
                        : 'Leverages dedicated hardware silicon on Intel Core and Intel Arc processors.'}
                    </span>
                  </div>

                  <div className={styles.stepCard}>
                    <span className={styles.stepNum} style={{ color: '#ef4444' }}>AMD GPU</span>
                    <span className={styles.stepTitle}>AMD AMF (<span className={styles.codeChip}>h264_amf</span>)</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'Akselerasi encoder untuk kartu grafis AMD Radeon RX.'
                        : 'Advanced Media Framework encoding for AMD Radeon RX graphic cards.'}
                    </span>
                  </div>

                  <div className={styles.stepCard}>
                    <span className={styles.stepNum} style={{ color: '#a855f7' }}>CPU FALLBACK</span>
                    <span className={styles.stepTitle}>Software CPU (<span className={styles.codeChip}>libx264</span>)</span>
                    <span className={styles.stepDesc}>
                      {isId
                        ? 'Encoder software standar universal yang kompatibel di semua komputer jika GPU encoder tidak tersedia.'
                        : 'Universal fallback encoder compatible with any CPU architecture.'}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* TAB 5: SECURITY & PRIVACY */}
          {activeTab === 'security' && (
            <>
              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <ShieldCheck size={16} style={{ color: '#10b981' }} />
                    {isId ? 'Audit Keamanan & Jaminan Privasi Data' : 'Security & Privacy Guarantee'}
                  </span>
                  <span className={styles.tagBadge}>100% Private</span>
                </div>
                <p>
                  {isId
                    ? 'Aplikasi ini dirancang dengan prinsip Zero-Leakage Privacy. Tidak ada data pribadi Anda yang dikirim ke pihak luar:'
                    : 'The application is engineered with Zero-Leakage Privacy standards. No sensitive data is transmitted outside:'}
                </p>

                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[✓]</span>
                    <div>
                      <strong>{isId ? 'Tanpa Telemetri & Tracking Pihak Ketiga' : 'Zero Telemetry or Third-Party Tracking'}:</strong>{' '}
                      {isId
                        ? 'Tidak ada Google Analytics, Mixpanel, Sentry, atau script pelacak eksternal. Semua footer pelacak bawaan telah dibersihkan secara permanen.'
                        : 'No Google Analytics, Mixpanel, Sentry, or external tracking beacons. All tracking footers have been permanently purged.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[✓]</span>
                    <div>
                      <strong>{isId ? 'Keamanan YouTube Cookies' : 'Secure YouTube Cookies'}:</strong>{' '}
                      {isId
                        ? 'Cookie YouTube disimpan secara eksklusif di localStorage browser Anda. Cookie hanya dikirim ke proses yt-dlp lokal komputer Anda saat mengunduh video untuk mengatasi limit/pembatasan YouTube, dan tidak pernah diunggah ke server cloud manapun.'
                        : 'YouTube cookies reside strictly in browser localStorage and are passed solely to local yt-dlp processes on your own machine.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[✓]</span>
                    <div>
                      <strong>{isId ? 'Perlindungan Kunci API (API Key Masking)' : 'API Key Masking & Protection'}:</strong>{' '}
                      {isId
                        ? 'Backend memiliki filter keamanan otomatis (SensitiveDataFilter) yang menyamarkan kunci API Gemini/OpenRouter pada terminal output dan file log agar tidak terekspos.'
                        : 'The backend enforces a SensitiveDataFilter redacting Gemini/OpenRouter keys from console outputs and logs.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>[✓]</span>
                    <div>
                      <strong>{isId ? 'Penyimpanan Sementara Aman (Temp Storage)' : 'Safe Temporary Storage'}:</strong>{' '}
                      {isId
                        ? 'Fitur "Bersihkan Temp" hanya menghapus potongan klip dan buffer sementara. File MP4 hasil ekspor yang sudah selesai disimpan di folder output TIDAK akan pernah terhapus.'
                        : 'The "Clear Temp" action only purges temporary slice buffers. Completed rendered MP4 files in your export directory are strictly preserved.'}
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.infoNotice}>
                <Lock size={15} style={{ flexShrink: 0, marginTop: 2 }} />
                <div>
                  <strong>{isId ? 'Audit Terverifikasi' : 'Audit Verified'}:</strong>{' '}
                  {isId
                    ? 'Seluruh lalu lintas jaringan hanya berkomunikasi dengan localhost (127.0.0.1:8000) dan API resmi yang Anda berikan sendiri (Google AI Studio / OpenRouter).'
                    : 'Network traffic is confined to localhost (127.0.0.1:8000) and official endpoints for credentials you provide (Google AI / OpenRouter).'}
                </div>
              </div>
            </>
          )}

          {/* TAB 6: TIPS & FAQ */}
          {activeTab === 'tips' && (
            <>
              <div className={styles.sectionBlock}>
                <div className={styles.sectionHeader}>
                  <span className={styles.sectionTitle}>
                    <HelpCircle size={16} style={{ color: 'var(--primary)' }} />
                    {isId ? 'Tips Praktis & Tanya Jawab (FAQ)' : 'Creator Best Practices & FAQ'}
                  </span>
                </div>

                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>Q:</span>
                    <div>
                      <strong>{isId ? 'Bagaimana cara mendapatkan Gemini API Key gratis?' : 'How to get a free Gemini API Key?'}:</strong>{' '}
                      {isId
                        ? 'Kunjungi aistudio.google.com, masuk dengan akun Google Anda, dan klik "Create API key". Kuota gratis Google AI Studio mencakup hingga 15 permintaan per menit secara cuma-cuma.'
                        : 'Visit aistudio.google.com, sign in with your Google account, and click "Create API key". Free tier covers up to 15 RPM for free.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>Q:</span>
                    <div>
                      <strong>{isId ? 'Kapan saya perlu mengatur YouTube Cookies?' : 'When should I configure YouTube cookies?'}:</strong>{' '}
                      {isId
                        ? 'Jika video YouTube yang Anda masukkan menampilkan pesan error 403 Forbidden, batas usia penonton (age-restricted), atau bot-verification dari YouTube. Anda dapat mengekspor cookie dari browser Anda menggunakan ekstensi Netscape cookie.'
                        : 'When encountering 403 Forbidden, age restrictions, or bot check challenges from YouTube.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>Q:</span>
                    <div>
                      <strong>{isId ? 'Berapa durasi klip terbaik untuk TikTok / Shorts / Reels?' : 'What is the optimal clip duration for short-form video?'}:</strong>{' '}
                      {isId
                        ? 'Durasi terbaik adalah antara 30 hingga 60 detik dengan hook kuat pada 3-5 detik pertama. Anda dapat menyesuaikan durasi minimum/maksimum di pengaturan filter sebelum analisis.'
                        : 'Optimal duration is 30 to 60 seconds with an immediate hook in the first 3-5 seconds.'}
                    </div>
                  </div>

                  <div className={styles.featureItem}>
                    <span className={styles.featureBullet}>Q:</span>
                    <div>
                      <strong>{isId ? 'Apakah saya bisa menggunakan model AI lain selain Gemini?' : 'Can I use other AI models besides Gemini?'}:</strong>{' '}
                      {isId
                        ? 'Ya! Pilih provider "OpenRouter" di form pengaturan, lalu gunakan model seperti Claude 3.5 Sonnet, DeepSeek V3, Llama 3, atau GPT-4o.'
                        : 'Yes! Select "OpenRouter" in the provider settings to utilize Claude 3.5 Sonnet, DeepSeek V3, Llama 3, or GPT-4o.'}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className={styles.footer}>
          <span className={styles.footerHint}>
            {isId ? 'Clipper AI — Local & Secure Media Studio' : 'Clipper AI — Local & Secure Media Studio'}
          </span>
          <button
            type="button"
            className={styles.closeFooterBtn}
            onClick={onClose}
          >
            {isId ? 'Tutup Panduan' : 'Close Guide'}
          </button>
        </div>
      </div>
    </div>
  );
}
