// 用語辞典データG: 拡充分その5
window.TERMS_G = [
 // ── 第2回 企業活動①: 経営・組織 ──
 {term:"コンプライアンス経営",en:"",cat:"S",star:false,lesson:2,def:"法令遵守を経営の基盤に据え、社会的信頼を維持しながら事業を行う経営スタイル。"},
 {term:"CVC",en:"Corporate Venture Capital",cat:"S",star:false,lesson:2,def:"事業会社がベンチャー企業へ出資し、新技術の獲得や新規事業創出を狙う投資活動。"},
 {term:"経営会議",en:"",cat:"S",star:false,lesson:2,def:"経営層が業務執行に関する重要事項を審議・決定する会議体。"},
 {term:"組織の階層構造",en:"",cat:"S",star:false,lesson:2,def:"経営層・管理層・実務層という指揮命令の縦のつながり。"},

 // ── 第3回 業務分析・データ利活用 ──
 {term:"アンケート調査",en:"Survey",cat:"S",star:false,lesson:3,def:"対象者に質問票を配布・回収し、意見や実態を収集する調査手法。"},
 {term:"定量調査 / 定性調査",en:"",cat:"S",star:false,lesson:3,def:"数値で把握できるデータを集める調査と、インタビュー等で背景や理由を深掘りする調査。"},
 {term:"データの前処理",en:"Data Preprocessing",cat:"S",star:false,lesson:3,def:"分析の前に、欠損値の補完や外れ値の除去などデータを整える作業。"},

 // ── 第4回 会計・財務 ──
 {term:"財務三表",en:"",cat:"S",star:false,lesson:4,def:"貸借対照表・損益計算書・キャッシュフロー計算書の総称。企業の財政状態と経営成績を示す。"},
 {term:"損益計算書の階層(まとめ)",en:"",cat:"S",star:false,lesson:4,def:"売上総利益→営業利益→経常利益→税引前当期純利益→当期純利益、と段階的に利益を絞り込む構造。"},
 {term:"金利負担",en:"",cat:"S",star:false,lesson:4,def:"借入金に対して支払う利息。営業外費用として計上される。"},

 // ── 第5回 知的財産権 ──
 {term:"著作権侵害",en:"Copyright Infringement",cat:"S",star:false,lesson:5,def:"著作権者に無断で著作物を複製・公衆送信等する行為。"},
 {term:"知的財産管理",en:"IP Management",cat:"S",star:false,lesson:5,def:"企業が保有する特許・商標などの知的財産を戦略的に管理・活用する活動。"},

 // ── 第6回 セキュリティ関連法・労働・取引 ──
 {term:"雇用契約 / 業務委託契約",en:"",cat:"S",star:false,lesson:6,def:"労働者として雇う契約と、独立した事業者に業務を委託する契約。指揮命令の有無が大きな違い。"},
 {term:"36協定",en:"",cat:"S",star:false,lesson:6,def:"労働基準法に基づき、法定労働時間を超える残業を可能にするために労使間で締結する協定。"},

 // ── 第7回 経営戦略マネジメント ──
 {term:"競争優位性",en:"Competitive Advantage",cat:"S",star:false,lesson:7,def:"競合他社に対して優位に立てる、自社独自の強み。"},
 {term:"差別化戦略",en:"Differentiation Strategy",cat:"S",star:false,lesson:7,def:"競合と異なる価値を提供することで、価格競争を避ける戦略。"},
 {term:"コストリーダーシップ戦略",en:"Cost Leadership Strategy",cat:"S",star:false,lesson:7,def:"業界最低水準のコストを実現し、価格競争で優位に立つ戦略。"},

 // ── 第8回 技術戦略・ビジネスインダストリ ──
 {term:"FoodTech",en:"Food Technology",cat:"S",star:false,lesson:8,def:"食品分野にITやバイオ技術を活用し、生産・流通・消費の課題を解決する取り組み。"},
 {term:"人流データ",en:"",cat:"S",star:false,lesson:8,def:"位置情報等から得られる人の移動・滞留の状況を表すデータ。都市計画やマーケティングに活用。"},
 {term:"デジタルマーケティング",en:"Digital Marketing",cat:"S",star:false,lesson:8,def:"Webサイト・SNS・広告配信などデジタル技術を活用したマーケティング活動。"},

 // ── 第9回 システム戦略・システム企画 ──
 {term:"業務システムの分類",en:"",cat:"S",star:false,lesson:9,def:"基幹系(会計・人事等)、情報系(意思決定支援等)、戦略系(競争優位のための独自システム)などの分類。"},
 {term:"システム連携",en:"System Integration",cat:"S",star:false,lesson:9,def:"複数の情報システムをAPI等でつなぎ、データや処理を連携させること。"},

 // ── 第10回 システム開発技術 ──
 {term:"導入判定基準",en:"",cat:"M",star:false,lesson:10,def:"システムを本番稼働させてよいかを判断するために、あらかじめ定める達成基準。"},
 {term:"仕様変更管理",en:"",cat:"M",star:false,lesson:10,def:"開発途中で発生する仕様変更を記録・承認し、影響範囲を管理するプロセス。"},

 // ── 第11回 開発プロセス・手法 ──
 {term:"アジャイルコーチ",en:"Agile Coach",cat:"M",star:false,lesson:11,def:"組織やチームがアジャイルな働き方を実践できるよう支援する専門家。"},
 {term:"継続的デプロイメント",en:"Continuous Deployment",cat:"M",star:true,lesson:11,def:"テストを通過したコードを自動的に本番環境へリリースする仕組み。CI/CDのさらに進んだ形態。"},

 // ── 第12回 プロジェクトマネジメント ──
 {term:"優先順位付け(プロジェクト)",en:"",cat:"M",star:false,lesson:12,def:"限られた資源の中で、重要度や緊急度に基づきタスクの実施順序を決めること。"},
 {term:"進捗会議",en:"",cat:"M",star:false,lesson:12,def:"プロジェクトの進捗状況を定期的に共有し、課題を早期に発見する会議。"},

 // ── 第13回 サービスマネジメント ──
 {term:"利用者満足度調査",en:"",cat:"M",star:false,lesson:13,def:"ITサービスの利用者に満足度を調査し、改善に活かす活動。"},
 {term:"サービスレベル報告書",en:"",cat:"M",star:false,lesson:13,def:"SLAの達成状況を定期的にまとめた報告書。"},

 // ── 第14回 システム監査と内部統制 ──
 {term:"監査計画書",en:"Audit Plan",cat:"M",star:false,lesson:14,def:"監査の目的・範囲・手続き・スケジュールなどを定めた文書。"},
 {term:"サンプリング(監査)",en:"Audit Sampling",cat:"M",star:false,lesson:14,def:"監査対象の全件を調べる代わりに、一部を抽出して検証する手法。"},

 // ── 第15回 2進数と論理演算 ──
 {term:"補数表現(2の補数)",en:"",cat:"T",star:false,lesson:15,def:"コンピュータで負の数を表現する一般的な方式。最上位ビットを反転し1を加えて求める。"},
 {term:"演算子の優先順位",en:"",cat:"T",star:false,lesson:15,def:"複数の演算子を含む式で、どの演算を先に行うかを定めたルール。"},

 // ── 第16回 確率・統計 ──
 {term:"箱ひげ図の読み方",en:"",cat:"T",star:false,lesson:16,def:"箱の中央線が中央値、箱の上下端が四分位、ひげの先が最大・最小値(外れ値を除く)を示す。"},
 {term:"独立性の検定",en:"",cat:"T",star:false,lesson:16,def:"2つの変数の間に関連性があるかどうかを統計的に検証する手法。"},

 // ── 第17回 AI・機械学習・生成AI ──
 {term:"ハイパーパラメータ",en:"Hyperparameter",cat:"T",star:true,lesson:17,def:"機械学習モデルの学習前に人間が設定する調整可能なパラメータ。学習率などが該当。"},
 {term:"精度・再現率",en:"Precision / Recall",cat:"T",star:true,lesson:17,def:"AIモデルの評価指標。精度=予測が正しかった割合、再現率=正解を見逃さなかった割合。"},
 {term:"AI利用ガイドライン",en:"",cat:"T",star:true,lesson:17,def:"組織や国が定める、生成AI等の適正利用のための指針。"},

 // ── 第18回 アルゴリズムとプログラミング ──
 {term:"変数のスコープ",en:"Variable Scope",cat:"T",star:false,lesson:18,def:"変数が有効な範囲。プログラム全体で使えるものと、特定の処理内でのみ使えるものがある。"},
 {term:"例外処理",en:"Exception Handling",cat:"T",star:false,lesson:18,def:"プログラム実行中に発生したエラーを検知し、適切に対処する仕組み。"},

 // ── 第19回 コンピュータ構成要素 ──
 {term:"演算装置 / 制御装置",en:"",cat:"T",star:false,lesson:19,def:"CPUを構成する2つの主要な機能。演算装置は計算を実行し、制御装置は命令の解読と各装置への指示を行う。"},
 {term:"補助記憶装置",en:"Auxiliary Storage",cat:"T",star:false,lesson:19,def:"主記憶より容量が大きく、電源を切ってもデータが保持される記憶装置。HDD・SSD等。"},

 // ── 第20回 システム構成要素 ──
 {term:"障害切り分け",en:"",cat:"T",star:false,lesson:20,def:"システム障害の原因がどの部分にあるかを特定していく作業。"},
 {term:"冗長化",en:"Redundancy",cat:"T",star:false,lesson:20,def:"同じ機能を持つ予備の機器や経路を用意し、障害発生時にも動作を継続できるようにすること。"},

 // ── 第21回 ソフトウェアとハードウェア ──
 {term:"OSのシェア",en:"",cat:"T",star:false,lesson:21,def:"市場で使用されているOSの割合。Windows・macOS・Linux・Android・iOSなどが代表例。"},
 {term:"パッケージソフトウェア",en:"Package Software",cat:"T",star:false,lesson:21,def:"あらかじめ完成した形で販売される汎用的なソフトウェア。個別開発するオーダーメイドソフトと対比される。"},

 // ── 第22回 情報デザインと情報メディア ──
 {term:"UI",en:"User Interface",cat:"T",star:false,lesson:22,def:"利用者とシステムとの接点となる画面や操作方法。"},
 {term:"グラフの種類の使い分け",en:"",cat:"T",star:false,lesson:22,def:"棒グラフ=量の比較、折れ線グラフ=推移、円グラフ=構成比、散布図=相関、と目的に応じて選ぶ。"},

 // ── 第23回 データベース ──
 {term:"物理設計 / 論理設計(DB)",en:"",cat:"T",star:false,lesson:23,def:"データの意味的な構造を定義する論理設計と、実際の格納形式を定める物理設計。"},
 {term:"インデックスの功罪",en:"",cat:"T",star:false,lesson:23,def:"検索は高速化するが、更新時の負荷が増えたり記憶容量を消費したりするトレードオフがある。"},

 // ── 第24回 ネットワーク① ──
 {term:"通信プロトコルの階層化",en:"",cat:"T",star:false,lesson:24,def:"通信の機能を複数の階層に分けて設計することで、変更や保守を容易にする考え方。"},
 {term:"ping / traceroute",en:"",cat:"T",star:false,lesson:24,def:"ネットワークの疎通確認や経路確認に使われる基本的なコマンド。"},

 // ── 第25回 ネットワーク② ──
 {term:"通信速度の単位(bps)",en:"",cat:"T",star:false,lesson:25,def:"1秒間に送受信できるビット数を表す通信速度の単位。"},
 {term:"アクセスポイント",en:"Access Point",cat:"T",star:false,lesson:25,def:"無線LAN機器を有線ネットワークに接続する中継機器。"},

 // ── 第26回 セキュリティ①: 脅威 ──
 {term:"情報漏えいの経路",en:"",cat:"T",star:false,lesson:26,def:"メール誤送信・USBメモリ紛失・不正アクセス・内部不正など、情報が外部に流出する様々な経路。"},
 {term:"セキュリティホール",en:"Security Hole",cat:"T",star:false,lesson:26,def:"ソフトウェアの設計・実装上の不備によって生じる、セキュリティ上の弱点。脆弱性とほぼ同義。"},

 // ── 第27回 セキュリティ②: 暗号と認証 ──
 {term:"鍵長",en:"Key Length",cat:"T",star:false,lesson:27,def:"暗号鍵のビット数。長いほど理論上は解読されにくいが、処理負荷も高くなる。"},
 {term:"エスクロー鍵管理",en:"Key Escrow",cat:"T",star:false,lesson:27,def:"暗号鍵を信頼できる第三者に預ける仕組み。紛失時の復旧などに利用される。"},

 // ── 第28回 セキュリティ③: 管理とISMS ──
 {term:"情報セキュリティ研修",en:"",cat:"T",star:false,lesson:28,def:"従業員のセキュリティ意識を高めるための教育プログラム。"},
 {term:"アクセス権限の最小化",en:"Least Privilege",cat:"T",star:true,lesson:28,def:"業務に必要な最小限の権限だけを付与する原則。内部不正や誤操作のリスクを抑える。"}
];
