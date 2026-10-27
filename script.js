/* Personal settings: edit these before sharing. */
const SETTINGS = {
  relationshipStartDate: "2026-06-06", // Дата начала отношений (YYYY-MM-DD).
  initialLetter: "",
  galaxyWordCount: 1800,
};
// Precomputed from assets/our-couple.png for crisp, origin-clean word rendering.
const PORTRAIT_MASK_SIZE = [506, 720];
const PORTRAIT_MASK_RUNS = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[[260,271]],[[255,276]],[[249,280]],[[245,283]],[[242,285]],[[239,288]],[[237,290]],[[234,291]],[[232,293]],[[230,294]],[[228,296]],[[226,297]],[[224,300]],[[222,302]],[[221,303]],[[219,304]],[[218,305]],[[217,306]],[[216,307]],[[214,308]],[[213,308]],[[212,309]],[[211,309]],[[210,310]],[[209,310]],[[208,310]],[[207,311]],[[206,311]],[[205,312]],[[204,312]],[[203,312]],[[202,312]],[[201,313]],[[201,313]],[[200,313]],[[200,313]],[[199,314]],[[198,314]],[[198,314]],[[197,315]],[[196,315]],[[196,315]],[[195,316]],[[195,316]],[[195,317]],[[194,317]],[[194,317]],[[194,317]],[[194,318]],[[194,318]],[[194,318]],[[194,318]],[[193,318]],[[193,318]],[[193,318]],[[194,318]],[[194,318]],[[194,318]],[[194,318]],[[194,318]],[[134,162],[194,318]],[[130,168],[195,318]],[[127,172],[195,318]],[[124,174],[196,318]],[[122,176],[196,318]],[[120,178],[197,318]],[[118,180],[197,318]],[[116,181],[198,318]],[[115,182],[199,318]],[[113,183],[199,318]],[[112,184],[200,318]],[[111,185],[200,317]],[[110,186],[201,317]],[[109,186],[201,317]],[[107,187],[202,317]],[[106,188],[202,316]],[[105,189],[202,316]],[[104,189],[202,316]],[[104,190],[203,316]],[[103,190],[203,315]],[[102,191],[204,315]],[[101,192],[204,314]],[[101,192],[205,314]],[[100,192],[206,314]],[[100,193],[206,314]],[[99,193],[206,313]],[[98,194],[206,313]],[[98,195],[205,313]],[[97,196],[205,312]],[[97,197],[204,312]],[[96,198],[204,312]],[[96,198],[203,311]],[[95,200],[201,311]],[[95,311]],[[94,311]],[[94,310]],[[93,310]],[[93,310]],[[93,310]],[[92,310]],[[92,310]],[[92,310]],[[92,310]],[[91,310]],[[91,310]],[[90,310]],[[89,310]],[[88,310]],[[86,310]],[[85,309]],[[82,309]],[[79,309]],[[76,309]],[[75,309]],[[73,309]],[[72,309]],[[71,309]],[[70,309]],[[69,310]],[[68,310]],[[68,310]],[[67,310]],[[67,310]],[[66,310]],[[66,311]],[[65,311]],[[65,312]],[[65,312]],[[65,313]],[[64,315]],[[64,318]],[[64,319]],[[64,321]],[[64,322]],[[64,323]],[[63,324]],[[63,325]],[[63,326]],[[63,327]],[[63,328]],[[63,329]],[[62,330]],[[62,331]],[[62,332]],[[62,333]],[[62,334]],[[62,335]],[[62,214],[218,336]],[[62,213],[222,338]],[[62,212],[227,340]],[[62,210],[237,344]],[[62,209],[245,346]],[[62,208],[251,349]],[[61,207],[251,352]],[[61,206],[252,354]],[[61,204],[252,357]],[[61,203],[251,361]],[[61,202],[251,364]],[[61,200],[251,366]],[[61,199],[250,369]],[[61,198],[250,372]],[[61,196],[250,375]],[[61,194],[250,378]],[[62,193],[249,380]],[[62,191],[249,383]],[[62,189],[249,386]],[[62,186],[248,388]],[[62,184],[248,390]],[[62,181],[248,392]],[[63,180],[247,394]],[[63,178],[246,396]],[[63,178],[245,398]],[[63,177],[244,400]],[[64,176],[244,401]],[[64,176],[243,403]],[[64,176],[241,404]],[[64,176],[240,406]],[[65,176],[239,407]],[[65,176],[237,409]],[[65,176],[235,410]],[[66,176],[232,411]],[[66,176],[230,412]],[[65,176],[227,413]],[[65,176],[226,414]],[[64,176],[224,415]],[[63,176],[222,416]],[[62,176],[219,417]],[[61,176],[216,418]],[[60,176],[213,419]],[[59,177],[211,420]],[[58,177],[208,421]],[[57,178],[206,421]],[[56,179],[203,422]],[[55,180],[200,423]],[[54,181],[199,424]],[[54,182],[198,424]],[[53,184],[196,425]],[[52,185],[195,426]],[[52,187],[194,426]],[[51,189],[193,427]],[[51,427]],[[50,427]],[[49,428]],[[49,428]],[[48,428]],[[48,428]],[[47,428]],[[46,428]],[[46,429]],[[45,429]],[[45,429]],[[44,429]],[[44,429]],[[44,430]],[[43,430]],[[43,430]],[[42,431]],[[42,431]],[[41,432]],[[41,432]],[[40,433]],[[40,433]],[[40,434]],[[39,434]],[[39,435]],[[38,435]],[[38,436]],[[38,437]],[[37,437]],[[37,438]],[[37,438]],[[36,439]],[[36,439]],[[36,440]],[[35,440]],[[35,441]],[[34,441]],[[34,442]],[[34,442]],[[33,442]],[[33,443]],[[33,444]],[[33,444]],[[32,445]],[[32,446]],[[32,446]],[[31,447]],[[31,448]],[[31,448]],[[31,449]],[[30,449]],[[30,450]],[[30,451]],[[29,451]],[[29,452]],[[29,452]],[[29,453]],[[28,454]],[[28,454]],[[28,455]],[[28,455]],[[28,456]],[[27,456]],[[27,457]],[[27,457]],[[27,458]],[[27,459]],[[27,459]],[[27,460]],[[27,460]],[[27,461]],[[27,461]],[[27,462]],[[26,462]],[[26,462]],[[26,463]],[[26,464]],[[26,464]],[[26,465]],[[26,466]],[[26,466]],[[26,467]],[[26,467]],[[26,468]],[[26,469]],[[26,469]],[[26,470]],[[26,470]],[[26,471]],[[26,472]],[[26,472]],[[26,473]],[[26,474]],[[26,474]],[[27,475]],[[27,475]],[[27,476]],[[27,476]],[[27,476]],[[27,476]],[[27,476]],[[27,476]],[[27,476]],[[27,476]],[[27,477]],[[27,477]],[[27,478]],[[27,479]],[[27,480]],[[27,481]],[[27,482]],[[27,483]],[[27,484]],[[27,484]],[[27,485]],[[27,486]],[[27,487]],[[28,487]],[[28,487]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[28,488]],[[29,488]],[[29,488]],[[29,488]],[[29,488]],[[29,488]],[[29,489]],[[29,489]],[[29,489]],[[29,488]],[[29,488]],[[29,488]],[[29,488]],[[30,488]],[[30,487]],[[30,487]],[[30,486]],[[30,221],[223,485]],[[30,220],[223,485]],[[30,219],[224,484]],[[30,218],[224,483]],[[30,218],[224,482]],[[30,217],[224,481]],[[30,216],[224,480]],[[30,216],[224,479]],[[30,215],[224,478]],[[30,214],[224,477]],[[30,214],[224,476]],[[30,213],[224,475]],[[30,213],[224,474]],[[30,212],[225,473]],[[30,212],[225,472]],[[30,211],[225,471]],[[30,211],[225,470]],[[30,211],[225,468]],[[31,211],[225,467]],[[31,211],[225,465]],[[31,210],[225,464]],[[31,210],[226,463]],[[31,210],[226,461]],[[31,210],[226,459]],[[31,210],[226,457]],[[31,210],[226,455]],[[31,210],[226,454]],[[31,210],[226,452]],[[32,210],[226,450]],[[32,210],[226,448]],[[32,210],[227,445]],[[32,210],[227,442]],[[32,210],[227,440]],[[32,210],[227,437]],[[33,210],[227,434]],[[33,210],[227,431]],[[34,210],[227,429]],[[34,210],[227,427]],[[35,210],[227,426]],[[35,210],[227,425]],[[36,210],[228,424]],[[36,210],[228,424]],[[37,210],[228,425]],[[37,210],[228,425]],[[37,210],[228,425]],[[38,210],[228,426]],[[38,210],[228,426]],[[38,210],[228,426]],[[38,210],[228,427]],[[39,210],[228,427]],[[39,210],[228,427]],[[39,211],[228,428]],[[39,211],[228,428]],[[39,212],[228,428]],[[39,212],[228,428]],[[40,213],[228,429]],[[40,214],[228,429]],[[40,214],[228,429]],[[40,215],[228,429]],[[40,215],[228,430]],[[41,216],[228,430]],[[41,216],[228,430]],[[41,217],[228,430]],[[41,217],[228,430]],[[41,218],[228,430]],[[41,218],[228,430]],[[41,219],[228,430]],[[41,219],[228,430]],[[41,220],[228,429]],[[41,220],[228,429]],[[40,221],[229,429]],[[40,221],[229,429]],[[39,222],[229,428]],[[39,222],[229,428]],[[38,222],[229,428]],[[38,222],[229,428]],[[37,222],[229,428]],[[36,222],[230,429]],[[36,223],[230,429]],[[35,223],[230,429]],[[34,223],[230,429]],[[34,223],[230,429]],[[33,223],[230,430]],[[33,224],[230,430]],[[32,224],[231,431]],[[32,224],[231,431]],[[31,224],[231,432]],[[31,224],[231,432]],[[31,225],[232,433]],[[30,225],[232,433]],[[30,225],[232,434]],[[30,225],[232,434]],[[29,225],[232,434]],[[29,225],[232,435]],[[29,225],[232,435]],[[28,225],[232,435]],[[28,225],[232,435]],[[28,225],[232,436]],[[28,225],[232,436]],[[28,226],[232,436]],[[28,226],[232,436]],[[28,226],[232,436]],[[27,226],[232,436]],[[27,226],[232,436]],[[27,226],[231,436]],[[27,226],[231,436]],[[27,226],[231,437]],[[26,226],[231,437]],[[26,226],[232,437]],[[26,227],[232,437]],[[26,227],[232,437]],[[26,227],[232,438]],[[26,227],[232,438]],[[26,227],[232,438]],[[26,227],[232,438]],[[26,227],[232,438]],[[25,227],[232,438]],[[25,227],[232,438]],[[25,227],[232,438]],[[25,227],[232,439]],[[25,227],[232,439]],[[25,227],[232,439]],[[24,227],[232,439]],[[24,227],[232,439]],[[24,227],[232,439]],[[24,228],[232,439]],[[24,228],[232,439]],[[24,228],[232,439]],[[23,228],[231,440]],[[23,228],[231,440]],[[23,228],[232,439]],[[23,228],[232,439]],[[23,228],[232,439]],[[23,228],[232,439]],[[22,228],[232,439]],[[22,229],[231,440]],[[22,440]],[[22,440]],[[22,440]],[[22,440]],[[22,440]],[[21,440]],[[21,441]],[[21,441]],[[21,441]],[[21,441]],[[21,442]],[[21,442]],[[20,442]],[[20,442]],[[20,442]],[[20,442]],[[20,443]],[[20,443]],[[20,443]],[[20,444]],[[20,444]],[[20,444]],[[20,445]],[[19,445]],[[19,445]],[[19,446]],[[19,446]],[[19,446]],[[19,447]],[[19,447]],[[19,447]],[[18,448]],[[18,448]],[[18,448]],[[18,449]],[[18,449]],[[18,449]],[[18,449]],[[18,450]],[[18,450]],[[18,450]],[[18,450]],[[18,451]],[[18,451]],[[18,451]],[[18,451]],[[17,452]],[[17,452]],[[17,452]],[[17,453]],[[17,453]],[[17,453]],[[17,453]],[[17,453]],[[17,454]],[[17,454]],[[17,454]],[[17,454]],[[17,455]],[[17,455]],[[17,455]],[[17,455]],[[17,456]],[[17,456]],[[17,456]],[[17,456]],[[17,456]],[[17,457]],[[17,457]],[[17,457]],[[17,457]],[[17,458]],[[17,458]],[[17,458]],[[17,458]],[[17,459]],[[17,459]],[[17,459]],[[17,459]],[[17,459]],[[17,460]],[[17,460]],[[17,460]],[[17,460]],[[17,229],[231,461]],[[17,228],[231,461]],[[17,227],[231,461]],[[17,227],[231,461]],[[17,227],[231,462]],[[17,227],[231,462]],[[17,226],[231,462]],[[17,226],[231,462]],[[18,226],[230,462]],[[18,226],[230,462]],[[18,225],[230,462]],[[18,225],[230,463]],[[18,225],[231,463]],[[18,225],[231,463]],[[18,224],[230,463]],[[18,224],[230,463]],[[18,224],[230,463]],[[18,224],[230,463]],[[18,224],[230,463]],[[18,224],[230,464]],[[18,223],[230,464]],[[18,223],[230,464]],[[18,223],[230,464]],[[18,223],[230,464]],[[18,223],[230,464]],[[18,222],[230,465]],[[18,222],[230,465]],[[18,222],[230,465]],[[18,222],[230,465]],[[19,222],[230,465]],[[19,221],[230,465]],[[19,221],[230,466]],[[19,221],[230,466]],[[19,221],[230,466]],[[19,221],[230,466]],[[19,220],[230,466]],[[19,220],[230,466]],[[19,220],[230,467]],[[19,220],[230,467]],[[19,220],[230,467]],[[20,219],[230,467]],[[20,219],[231,467]],[[20,219],[231,467]],[[20,219],[231,468]],[[20,218],[231,468]],[[20,218],[231,468]],[[20,218],[231,468]],[[20,218],[232,468]],[[21,218],[232,468]],[[21,218],[232,468]],[[21,217],[232,468]],[[21,217],[232,468]],[[21,217],[232,468]],[[21,217],[232,469]],[[21,217],[232,469]],[[22,216],[232,469]],[[22,216],[233,469]],[[22,216],[233,469]],[[22,216],[233,470]],[[22,216],[233,470]],[[22,215],[233,470]],[[23,215],[233,470]],[[23,215],[234,470]],[[23,215],[234,470]],[[23,214],[234,470]],[[23,214],[234,471]],[[24,214],[234,471]],[[24,214],[234,471]],[[24,214],[234,471]],[[24,213],[235,471]],[[24,213],[235,471]],[[24,213],[235,471]],[[25,213],[235,472]],[[25,213],[235,472]],[[25,212],[235,472]],[[25,212],[236,472]],[[25,212],[236,472]],[[26,212],[236,473]],[[26,212],[236,473]],[[26,212],[236,473]],[[26,212],[236,473]],[[26,211],[236,473]],[[26,211],[236,473]],[[26,211],[237,473]],[[27,211],[237,473]],[[27,211],[237,473]],[[27,211],[237,474]],[[27,210],[238,474]],[[27,210],[238,347],[348,474]],[[27,210],[238,346],[348,474]],[[28,210],[238,346],[349,474]],[[28,210],[238,346],[349,474]],[[28,209],[238,346],[349,474]],[[28,209],[238,346],[349,475]],[[28,209],[238,346],[350,475]],[[28,209],[239,346],[350,475]],[[28,209],[239,346],[350,475]],[[28,209],[239,346],[350,475]],[[28,208],[239,346],[350,475]],[[28,208],[239,346],[350,476]],[[29,208],[239,346],[351,476]],[[29,208],[240,346],[351,476]],[[29,208],[240,346],[351,476]],[[29,207],[240,347],[351,476]],[[29,207],[240,347],[351,476]],[[29,207],[240,347],[351,476]],[[29,207],[240,347],[352,476]],[[29,207],[241,347],[352,476]],[[29,206],[241,347],[352,476]],[[29,206],[241,347],[352,476]],[[29,206],[241,347],[352,477]],[[29,206],[241,347],[353,477]],[[29,206],[242,348],[353,477]],[[29,206],[242,348],[353,477]],[[29,206],[242,348],[353,477]],[[29,205],[242,348],[354,477]],[[29,205],[243,348],[354,478]],[[29,205],[243,348],[354,478]],[[29,205],[244,348],[354,478]],[[29,205],[244,348],[354,478]],[[29,205],[244,348],[354,478]],[[29,205],[244,348],[354,478]],[[29,204],[244,348],[355,478]],[[29,204],[244,348],[355,479]],[[29,204],[244,348],[355,479]]];
const PORTRAIT_TONE_SIZE = [64, 91];
const PORTRAIT_TONE_MAP = Uint8Array.from(atob("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMQXjNqkEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEuooqigiq/DtFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKLeqGxSUlVieHaUogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANfSjG5VblpOS1JYYoxVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTmhIKKc05LRkFQWFxsbgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHb/tnh4fUFGREFEVVVSVX0mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC88q99XGI8RERESFVcWlBpaQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAA0tKEaUZLSERGREtLTlJOVUEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJcaWyCoP//AHCebmJSUEtGQUFGSEtSVWRIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPoBSSERGSFXS//8U19R4dmZSSEZGQURGVVV9UgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYvJcTkE6SFXAzbL/cMr/yJt9YlpLS0hESE5VcDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDXWktVgl+W+NLS4fW55qyMinNsYlxfZGRiX1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFjIyG46ueGK6NqUm57N5qqeboyHeHZwgJSooJGRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4ucpQRKLhqKy5oqCejoJ61KiKjoSCinCKtrSsggAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6RZmxcUnO+paCWnqyqpaV9acDogo6Kh4pwc77GylgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJGULTCHoqJzlsagrLKvr6+0eFxwgo6Kh4RzfYfSxtSCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADom1VQ5Oabc5jQpZaqqqW0tKh4fYSKioyEbnCb5rLN7h4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAt5Kqic1zScHa2sqCboKqloqWvoGyCgoqKgnp9rOiRtHr/dgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWtCezXhGgnCCzciiqqioqqWgkZaHeoqCgIqRhMjGcFyb//+HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJbaw+TawIrA2tK5paqlpaCYiqCgRGlzkYqOfYeqZFyM9bnQ/82lSwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABptNr/3NJp4f//oKWgnqWYnr7DCgAAAACAlmmMc1VccMPAvoCe2v//pTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjNy+8OjckZb//5SgnqCbucBsAAAAAAAArF96fVxIZp6yyoeRjICKqrLy+EsAAAAAAAAAAAAAAAAAAAAAAAAAADrur9fmzbRSUHOEmKWWrJsAAAAAAAAI//JVdmZBfZiRhI6WlpSYlpaUh/r/ngAAAAAAAAAAAAAAAAAAAAAAAAAIpWxiUlB4YkQ+c5iilsNcAAAAAEZSmOtmVWxQlqieqKqloJ6Wm6Clm6/c/P/1AAAAAAAAAAAAAAAAAAAAAAAAinNmUj40OlJOPEhzm6KlhwAAwP////++YlJIYqylpaKgpaqlqKWqqKXGyvL//94AAAAAAAAAAAAAAAAAAAAAeIpkVT43OjJEVUE8RlBfS2J23v//////gpaANIeemJ6blJiioKWlr6ysvr7c7vj/XAAAAAAAAAAAAAAAAAAAIIxkWkE0NzQ0N2ZSOkE0MjdaRP//////1H2RfUSYkZuenpugoqCgqKyvqsCvwNzc/3oAAAAAAAAAAAAAAAAAAHBmaVA6NzQyMjBaTjc+RD40TjK5/////4qHjHpSlo6YnpuenqCioKWvr6Wyr6rG1P+5AAAAAAAAAAAAAAAAAAB6YlA8MjQ0NC0yPDc3QT43MERBKHP///9pjJRzUpiUjo6Ym56eoKKgqrKlqq+lstL//ygAAAAAAAAAAAAAAABSbpGRYjItOjAtMjc3Oj48PjI6Oj5SUpv/eIqObE6YkZGOmJRzmJaloqCioqWvqqq+8v/1AAAAAAAAAAAAAAAAjv///6yMPC0yMDI0NDQ0PDwwNy00NEFYiox9kW5Qm4yOkZaWemaHoqWopZaesqysr9T//zwAAAAAAAAAAAAANP///8agqJEtKi0wNDAyNzwyLS0tMjcwUlxwgI5uRpGMjpSWpWRIoKy0rLKWjqyqrKyy6///AAAAAAAAAAAAAMb//+aqpaW2biAwMjAtLTI3YopsQTcwKi1YbH2MeEaKioyUmJuOh7S5trKllHiqrKqootzk/6oAAAAAAAAAAAD///++qqioqqg8KC0qLSotNDdSUC0qJjAmSHCCfYeKio6RkZuboqyvwLagnnpzoLKlqKK00v//AAAAAAAAAAAA///1r6qsr6ivYiAtMDIwNEtiKiowLSYmIzBsgH2EkYqOkZuipaqqub65qqiWfaWvoqqlnsj1/7kAAAAAAAAAAP//0qyvr7KstnMeMDAyMDw+RDQtMigmJiAeUnp4epiRjJGWoqqvsrm8tqWom2aKrKCoqKK23v//JgAAAAAAAAD//7msr6+0sr5kIDAtMC0+RCgwLS0oJiYmHjdzfXaRlpSOmKWlsry5ubavqLSCbKWiqqilor7h//AAAAAAAAAA//+0qKKosrbaSxwoKCooKDAtMDItJigmKCMeYoB2h5abm5iiqqi2vrS2sqWopW6RoKWopaWl1/z/bgAAAAAAFP//rKWipa+81DQjKioqKigqKiowKiYmJigmHkR6hH2RlJubnqWoqKy2ua+qqKyHaZiioqKiqMju/6IAAAAAAAD//7SlpaKqzd4oIyoqMComKi0oMComIygjIygwcId9hJiWoKWioqiqrLmyoqWonk6EoKCgm6qvqtf/MgAAAAAA//+sqqqiotTIIyYmIygmJigoLSowKCgjICMgKG6KjIKWm56ioqWqqqyvsragnpZwc5SeoKCikar//9AAAAAAAP//rKiioKLKqiMoJiYmKiYoLSowMC0jIyAmIyNfio6Kh6CWmKKlpaiyr6y0spiKimlwjpuYlpisyO74AAAAAAD//6ilnpuexqAZKCYgKCgjJi0qMDIoIyMcIB4tXH2OjI6Olpagoqisr7KqoqqyoIyAbnOKlpaemKLc6wAAAAAA8P+ioI6OisCOFiomIygjKCgmKCYqIyAcHh4ePFVzjpSWjpSemKKoqqqstLSemLKloJFsjpaeoqCq5P8gAAAAAMb/qJSOh4rQehYmHiMoJiMgICYgIx4ZHBwZRj5iaYKUlpuRmJueqKqvsqyvrIyMqKhYc56Ym6CgqND/DAAAAABw/8Cbh4Cb3l8WKCAgIyYgICYmHhwcHBQZMFxLWnBwjJiUnpiboqCgr6yqqKyqioSlbHabmJiYnqDkzQAAAAAArP/XtHp9su5GFiMgIyAcHiMgHhkcGRwZPDRiYlhpeH2OlJugnqClr6CgrKqqrJFzhIJzlpubmKLovgAAAAAAAJH/17J2hNTuLR4jIyMeIB4cHh4eHBwWIwAAYnZaboB9hI6bnqKooLzavJ6gqKqlkXCAgpuioqrIuQAAAAAAAACi8LS2dozh1BYgIBkZHiAeHiAcGRkZHCgAJlV6bm6Agn2AlJGgqKKbpdzoyq+ioJ6YgJagssi8bAAAAAAAAAAARtzI14CHysomHCAeFBkcHB4eHhwZGRQ0AA9Lc25mfYSHhIyMlpGYmJaYvvz/5Ma+yPW2vr5fAAAAAAAAAAAAAADe/+6Wfa/QKBkcHhkcHB4ZFhwcFhYULQAARmRzbmyEhIyMkZaWio6WmI6b1////P/89WIAAAAAAAAAAAAAAAAAZv/enn2W5mIPIB4gHCAgHBweGRYSEjcADDxfc25sgoeHjJGHr8CCkayskYS56/////8wAAAAAAAAAAAAAAAAAEj/0JZ6gtSlCBQSDwwMDAwPCggKI1JBFgA8UnBsaX2Eh4eEjITA3p652uSsjKLU8vX/gAAAAAAAAAAAAAAAAAAA8tyRen3A1DxLWFJLTkE8PEZaboxmEjw+PE5fc2lzgICKh4KKgKXr0rTD+NqblNz//8oAAAAAAAAAAAAAAAAAAKr6joB9ud4wNFJmfY6Ynqqym4JQGQ8tUC1OUmx2ZnqKhIqKh46Hkd7/w6zo9cao4f92AAAAAAAAAAAAAAAAAEF4/5aCfajmPgUMCgwPFBkmIxwSDBQUFAU6TlhieHNsgISKjI6MkZGErPX1w77h68P/qgAAAAAAAAAAAAAAAEZGSPiegHiY4WQKHBkWFAwUDwwSDxIUFApOWlhcXG59bmJ2h4qOjpGUlIqExv/uvMPr/P9BAAAAAAAAAAAAAABVPCbUsoB4it6AAhYSDw8SFBISEhIPDxIWCD5OX2JwgoB4c2x6hI6MjIyRjoeW2vLh5uj/ZgAAAAAAAAAAAAAAMEEUmMaAeHjKmAUWEg8PDxISEg8PEhISCBIySFpwc3Z6goB6cHB2cG5uen12fYeq1+je/4QAAAAAAAAAAAAAAEE0AE7QgH1wrMYSEhIMEg8SEhISEhIPDwgcRlJVZmxueH2Ch4B4bGlwhIqgrJiKirTc8v+2AAAAAAAAAAAAAABSKBIWto54bJHXKAoMDBIMCgwSDw8SDw8FN1o+WGJmaXZ4eHh6hIqRmJ6Rorm+tLS5wNf//wAAAAAAAAAAAAAmQSgUAn2ieml41FgFFA8SDw8PDw8MDwoMCBYyRFVaX2ZucHB2gICKioSCgoqKnqy2tLnI8OYAAAAAAAAAAAAACj4oFgw0r3hubL6WAA8KDwwPDAoMCgoKDAwKHERIVVhidnp6gICCeH2HjISHjo6gqKWetubXAAAAAAAAAAAAAAA3IxYcEpSKcGyRvg8ICgwMDwwKCBYSDAwMCB48PDdLPEFYYmlVRFpkaW54bGlkVVVuhKjN6BQAAAAAAAAAAAAgMCMSFgJIonBscMhBAAgIDwwKDAo0FAwKCggePjxBWGJaYl9fXD5VYj5LZFxiX1VfTmSOudxLAAAAAAAAAAAAHioeDBIPDIyAbGa5XwAKDw8KCgoMDwoICggFIEZcUlVmYmJiYl9LRmQwWmZkZGRcUFBcYqXIkQAAAAAAAAAAAEggGRISFAJIkXZsoIIADwgICAoFCgoKCAgFCBxIUk5cZF9mZGRfREZEPGJfXFpYXF9fYo7A6NwAAAAAAAAAAAAqKBIMEhIMFJRuWmKvHggMDAgFHAgFBQoICAIcPERaX1xfXFxiX1AyRlhfWlpkX2ZmaYCgvtz8OgAAAAAAAAACPCAcDw8MCA+0bF9mymwADw8KCk4KBQUICggCJkZQWGJfZGJiX2RcRIBuS19fX2JiaWxsirba/3gAAAAAAAAADEEeHhYUFgIyynZfX5a+CggFAgggCAUFCggFAChLUlpfYmJmX2RfYlBuZFBfZGRkZGlpbIe00vK0AAAAAAAAAAU+HhwjKB4IHtJ6Ulh40EQACgUIAgoFCAgFAgAmUFJcX1VaX2RmXFxVaWRSbmxmYmZiYmmKstLmxgAAAAAAAAAKOiAcGQwPCgC+dlhSbLxwABIICAgFAgUCAAUAKk5OVVJaX2RmX2JfS19YUmmbYmRpXFhmgKLK4es3AAAAAAAADDwgIBIICgoKoGlaS2ylhwAKBQUFBQUKCAACACZOS1VaX2JcYmRfZEs6PkZfkWxmZFxSaYesxtzwdgAAAAAAABRBHBwPCAgFCopiZFJakZEABQICBQIFAgACAgoySEtVUlxiXFxiX2JVKigmUHZuXF9aXGJ6pb7c8ocAAAAAAAAALRYUDwwMBQqAZGRiSISAAAgAAAICAgAAAAAoRkZOUFJVWFxaXFxaWDowQVBpc1hVWmRfc57A4ea8AAAAAAAAABwWFA8ICAUFX19cWEZwigAFBQUABQACBQUAI0RGTkhOWlpaX1pYXFxLUlVaWG5cVVhYX3CbwOHevAAAAAAAAAAwFBQKBQAIACpaTlJLZFgABQUAAgIAAAAAACNBRkhBUlxcWlpaWF9YPktaWFJfXFhVWFVwmLTa18YcAAAAAAAAKhQMBQIAAgIADFVkPFxOAAIAAAAAAAAAAABGSEZEPlJcXFpcWFpcVTxGWlJVX1VVTlhSbJ6s1NeyHgAAAAAAABwWCgUFAAICBQIUS0RQPAAAAAAAAAAAAgAWDz5GRD5OVVpaVVpaX1g+LVJOWFpcWFVYWGKRqNzSpUgAAAAAAAAAEgoABQIAAAAFABxBIxQAAAAAAAAAAAAAAAA0SERBUFJOWFpVUlhYQSZORlJVWFVfWlVskaXXyJZQAAAAAAAAABIIAAUFAgAAAAAAAAAAAAAAAAAAAAAAAAAAHktEPE5OS1VaWFBVTkQmS0tSWl9YVVVVZpSo0sCRcwAAAAAAAAocAgICAAAAAAAABQICAgUAAAAAAAAAAAIeACM+RD5ITlBQUlJVWEtEKEtSUlJQVVVSWGKMqtLAh4oAAAAAAAAAKAIAAgAAAAAAAAAFAAACAAAAAAAAAAASCgBIPkE3SEtLTlBSWlhQRjJLSFJVVVVQTkZsgKrGvoqOAAAAAAAAABkMAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEQ+OkhIRk5OUFxSSEYgRktOUlJSUk5GaYSqyq+HlgAAAAAAAAACFAICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6OjdBSEhGTlVYUEY6GUFQUFBSUE5OUGyMmMa8faw+AAAAAAAAFgwAAAAAAAAAAAAAAAAAAAAAAAAAAAAZAAAAIzQtPEhESFBSWlJEPCpESFVVUlJSS0hkjJjIw3qgRgAAAAAAADoKAgAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAADctMERERkhLVVhQRjwmQUhSWlVYUk5IVYebw82HmHoAAAAAAAA0CA8FAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBKjQ+PkFITlJSTkQ8MmQ8TlJYUlBOUFKAlrnQjpiUAAAAAAAAMgoIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACjQtNDxBRkhOUk5IPiAcPE5QTkhOTlBagpil3JSEggAAAA=="), character => character.charCodeAt(0));
const scenes = ["scene-envelope", "scene-letter", "scene-galaxy", "scene-portrait"].map((id) => document.getElementById(id));
const letterField = document.getElementById("love-letter");
const letterCount = document.getElementById("letter-count");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentScene = 0, galaxy = null;
letterField.value = SETTINGS.initialLetter;
updateWordCount();
function updateWordCount() {
  const count = letterField.value.trim().split(/\s+/u).filter(Boolean).length;
  letterCount.textContent = `${count} ${count === 1 ? "слово" : count > 1 && count < 5 ? "слова" : "слов"}`;
}
function showScene(index) {
  if (index < 0 || index >= scenes.length || index === currentScene) return;
  scenes[currentScene].classList.remove("is-active");
  scenes[currentScene].setAttribute("aria-hidden", "true");
  scenes[index].classList.add("is-active");
  scenes[index].setAttribute("aria-hidden", "false");
  currentScene = index;
  if (index === 2) startGalaxy(); else stopGalaxy();
  if (index === 3) renderFinalLetter();
}
function openEnvelope() {
  const button = document.getElementById("open-envelope");
  if (button.classList.contains("is-opening")) return;
  button.classList.add("is-opening");
  window.setTimeout(() => showScene(1), reducedMotion.matches ? 50 : 1050);
}
document.getElementById("open-envelope").addEventListener("click", openEnvelope);
document.getElementById("back-envelope").addEventListener("click", () => showScene(0));
document.getElementById("show-galaxy").addEventListener("click", () => showScene(2));
document.getElementById("back-letter").addEventListener("click", () => showScene(1));
document.getElementById("show-portrait").addEventListener("click", (event) => {
  if (!galaxy || !galaxy.portraitStarted) {
    if (!galaxy) startGalaxy();
    galaxy.formPortrait();
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = "Слова собираются…";
    window.setTimeout(() => { button.disabled = false; button.innerHTML = "Посмотреть на нас ближе <span>→</span>"; }, reducedMotion.matches ? 50 : 4300);
    return;
  }
  const canvas = document.getElementById("universe");
  canvas.style.transition = "opacity .9s, transform .9s";
  canvas.style.opacity = "0"; canvas.style.transform = "scale(.08)";
  window.setTimeout(() => { canvas.style.cssText = ""; showScene(3); }, reducedMotion.matches ? 30 : 880);
});
letterField.addEventListener("input", updateWordCount);
function renderFinalLetter() {
  const text = letterField.value.trim();
  const excerpt = document.getElementById("letter-excerpt");
  excerpt.textContent = text ? `«${text}»` : "";
  excerpt.hidden = !text;
  const duration = document.getElementById("love-duration");
  const date = new Date(`${SETTINGS.relationshipStartDate}T00:00:00`);
  if (!SETTINGS.relationshipStartDate || Number.isNaN(date.getTime()) || date > new Date()) { duration.hidden = true; return; }
  duration.hidden = false;
  const today = new Date();
  let years = today.getFullYear() - date.getFullYear();
  let months = today.getMonth() - date.getMonth();
  let remainder = today.getDate() - date.getDate();
  if (remainder < 0) {
    remainder += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    months -= 1;
  }
  if (months < 0) { months += 12; years -= 1; }
  const parts = [];  if (years) parts.push(`${years} ${plural(years, "год", "года", "лет")}`);
  if (months) parts.push(`${months} ${plural(months, "месяц", "месяца", "месяцев")}`);
  parts.push(`${remainder} ${plural(remainder, "день", "дня", "дней")}`);
  document.getElementById("duration-value").textContent = parts.join(" · ");
}
function plural(n, one, few, many) { const t=n%10,h=n%100; return t===1&&h!==11?one:t>=2&&t<=4&&(h<12||h>14)?few:many; }
document.getElementById("restart").addEventListener("click", () => { document.getElementById("open-envelope").classList.remove("is-opening"); showScene(0); });
const loveWords = ["Люблю","Я тебя люблю","I love you","Je t’aime","Te amo","Ti amo","Ich liebe dich","Я тебя кохаю","Seni seviyorum","愛してる","사랑해","我爱你","أحبك","Σ’ αγαπώ","Kocham cię","Ik hou van jou","Eu te amo","Mahal kita","Я люблю тебя","Te quiero","Я кахаю цябе","אני אוהב אותך","मैं तुमसे प्यार करता हूँ","รักคุณ","Jag älskar dig","Jeg elsker deg","Jeg elsker dig","Rakastan sinua","Ma armastan sind","Es tevi mīlu","Aš tave myliu","Miluji tě","Ľúbim ťa","Szeretlek","S’agapó","Volim te","Ljubim te","T’estimo","Quérote","Amo-te","Nakupenda","Ndagukunda","Mi amas vin","Vôi yêu bạn","Anh yêu em","사랑합니다","รักคุณ","Mahal na mahal kita","Kuv hlub koj","愛してるよ","Te iubesc","Ik hou van jou","أنا أحبك","Te amo mucho","Mwen renmen ou","Aloha wau iā ʻoe","Main tumse pyar karta hoon"];
function startGalaxy() { const canvas=document.getElementById("universe"); if(!galaxy) galaxy=new WordGalaxy(canvas); galaxy.start(); }
function stopGalaxy() { if(galaxy) galaxy.stop(); }
class WordGalaxy {
  constructor(canvas) {
    this.canvas=canvas; this.context=canvas.getContext("2d",{alpha:true}); this.frame=0; this.active=false; this.words=[]; this.stars=[]; this.portraitStarted=false; this.portraitStartTime=0; this.userRotation=0; this.dragPointer=null; this.lastPointerX=0;
    canvas.setAttribute("tabindex","0");
    canvas.addEventListener("pointerdown", event => this.beginRotate(event));
    canvas.addEventListener("pointermove", event => this.rotateWithPointer(event));
    canvas.addEventListener("pointerup", event => this.endRotate(event));
    canvas.addEventListener("pointercancel", event => this.endRotate(event));
    canvas.addEventListener("keydown", event => this.rotateWithKeyboard(event));
    this.resizeHandler = () => this.resize();
    if (typeof ResizeObserver !== "undefined") {
      this.resizeObserver = new ResizeObserver(this.resizeHandler);
      this.resizeObserver.observe(canvas);
    } else {
      window.addEventListener("resize", this.resizeHandler, { passive: true });
    }
    this.resize();
  }
  beginRotate(event) {
    if (this.portraitStarted || (event.button !== 0 && event.pointerType === "mouse")) return;
    this.dragPointer = event.pointerId; this.lastPointerX = event.clientX;
    this.canvas.classList.add("is-dragging");
    if (typeof this.canvas.setPointerCapture === "function") this.canvas.setPointerCapture(event.pointerId);
  }
  rotateWithPointer(event) {
    if (this.portraitStarted || event.pointerId !== this.dragPointer) return;
    this.userRotation += (event.clientX - this.lastPointerX) * .009;
    this.lastPointerX = event.clientX;
  }
  endRotate(event) {
    if (event.pointerId !== this.dragPointer) return;
    this.dragPointer = null; this.canvas.classList.remove("is-dragging");
    if (typeof this.canvas.hasPointerCapture === "function" && this.canvas.hasPointerCapture(event.pointerId)) this.canvas.releasePointerCapture(event.pointerId);
  }
  rotateWithKeyboard(event) {
    if (!this.portraitStarted && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
      event.preventDefault(); this.userRotation += event.key === "ArrowLeft" ? -.16 : .16;
    }
  }
  resize() {
    const b=this.canvas.getBoundingClientRect(); if(!b.width||!b.height)return;
    this.width=b.width;this.height=b.height;this.dpr=Math.min(window.devicePixelRatio||1,2);
    this.canvas.width=Math.round(this.width*this.dpr);this.canvas.height=Math.round(this.height*this.dpr);if(this.context)this.context.setTransform(this.dpr,0,0,this.dpr,0,0);
    const mobile=this.width<650, target=Math.min(SETTINGS.galaxyWordCount,mobile?520:900);
    this.words=Array.from({length:target},(_,i)=>{
      const depth=Math.random(), angle=Math.random()*Math.PI*2;
      return {angle,radius:Math.sqrt(Math.random()),depth,phase:Math.random()*8,text:loveWords[i%loveWords.length],size:mobile?8+Math.random()*3:9+Math.random()*5,hue:Math.random()<.72?335+Math.random()*35:36+Math.random()*22};
    });
    this.stars=Array.from({length:Math.min(280,Math.round(this.width*this.height/4300))},()=>({x:Math.random()*this.width,y:Math.random()*this.height,size:Math.random()*1.3+.25,phase:Math.random()*7,speed:Math.random()*.025+.004}));
    this.preparePortrait();
  }
  preparePortrait() {
    const aspect = PORTRAIT_MASK_SIZE[0] / PORTRAIT_MASK_SIZE[1];
    const height = Math.min(this.height * .7, this.width * .88, 620, this.width * .74 / aspect);
    const width = height * aspect;
    const left = (this.width - width) / 2, top = this.height * .53 - height / 2;
    const phrases = ["Люблю", "Я тебя люблю", "Love", "I love you", "Amor", "Amo", "Te amo", "Ti amo", "Je t’aime", "Je t’adore", "Ich liebe dich", "Ich hab dich lieb", "愛してる", "愛しています", "사랑해", "사랑해요", "我爱你", "我愛你", "أحبك", "أنا أحبك", "Σ’ αγαπώ", "Kocham cię", "Kocham", "Ik hou van jou", "Eu te amo", "Mahal kita", "Mahal na mahal kita", "Seni seviyorum", "Te quiero", "Te amo mucho", "Я тебе кохаю", "Я тебя кохаю", "Я кахаю цябе", "Jag älskar dig", "Jeg elsker deg", "Jeg elsker dig", "Rakastan sinua", "Ma armastan sind", "Es tevi mīlu", "Aš tave myliu", "Miluji tě", "Ľúbim ťa", "Szeretlek", "Volim te", "Ljubim te", "T’estimo", "Quérote", "Amo-te", "Ti voglio bene", "Te iubesc", "Обичам те", "Волим те", "Te dua", "Nakupenda", "Mo nífẹ̀ẹ́ rẹ", "Ngiyakuthanda", "Ndiyakuthanda", "Ek is lief vir jou", "Aku cinta kamu", "Anh yêu em", "รักคุณ", "ฉันรักคุณ", "আমি তোমাকে ভালোবাসি", "मैं तुमसे प्यार करता हूँ", "אני אוהב אותך", "אני אוהבת אותך", "მიყვარხარ", "Ես քեզ սիրում եմ", "Мен сені жақсы көремін", "Men seni sevaman", "Би чамд хайртай", "Aloha wau iā ʻoe", "Kuv hlub koj", "รักเธอ", "愛", "Люблю тебя"];
    const fontSize = this.width < 650 ? 10 : 12;
    const lineHeight = fontSize * 1.55;
    const gap = Math.max(4, fontSize * .42);
    const measureCanvas = document.createElement("canvas");
    const measureContext = measureCanvas.getContext("2d");
    measureContext.font = `${fontSize}px "Cormorant Garamond", Georgia, serif`;
    const sourceY = y => Math.max(0, Math.min(PORTRAIT_MASK_SIZE[1] - 1, Math.round(y / height * PORTRAIT_MASK_SIZE[1])));
    const intersectRuns = rows => {
      let spans = PORTRAIT_MASK_RUNS[rows[0]].map(span => [...span]);
      for (const row of rows.slice(1)) {
        const next = [];
        for (const [leftEdge, rightEdge] of spans) {
          for (const [otherLeft, otherRight] of PORTRAIT_MASK_RUNS[row]) {
            const start = Math.max(leftEdge, otherLeft), end = Math.min(rightEdge, otherRight);
            if (end > start) next.push([start, end]);
          }
        }
        spans = next;
        if (!spans.length) break;
      }
      return spans;
    };
    this.portraitPoints = [];
    let phraseIndex = 0;
    const minWord = "Love";
    for (let y = fontSize * .62; y < height - fontSize * .25; y += lineHeight) {
      const firstRow = sourceY(y - fontSize * .34), lastRow = sourceY(y + fontSize * .34);
      const rows = [];
      for (let row = firstRow; row <= lastRow; row++) rows.push(row);
      const spans = intersectRuns(rows).map(([start, end]) => [start / PORTRAIT_MASK_SIZE[0] * width, end / PORTRAIT_MASK_SIZE[0] * width]);
      for (const [startX, endX] of spans) {
        let x = startX + 2;
        while (x < endX - measureContext.measureText(minWord).width) {
          const remaining = endX - x;
          let chosen = null;
          for (let attempt = 0; attempt < phrases.length; attempt++) {
            const phrase = phrases[(phraseIndex + attempt) % phrases.length];
            const phraseWidth = measureContext.measureText(phrase).width;
            if (phraseWidth <= remaining - 1) {
              chosen = { phrase, phraseWidth };
              phraseIndex = (phraseIndex + attempt + 1) % phrases.length;
              break;
            }
          }
          if (!chosen) break;
          const midX = x + chosen.phraseWidth * .5;
          const toneX = Math.max(0, Math.min(PORTRAIT_TONE_SIZE[0] - 1, Math.floor(midX / width * PORTRAIT_TONE_SIZE[0])));
          const toneY = Math.max(0, Math.min(PORTRAIT_TONE_SIZE[1] - 1, Math.floor(y / height * PORTRAIT_TONE_SIZE[1])));
          const tone = PORTRAIT_TONE_MAP[toneY * PORTRAIT_TONE_SIZE[0] + toneX] / 255;
          const hue = 340 + tone * 54;
          const lightness = 64 + tone * 20;
          const color = `hsl(${hue}, 58%, ${lightness}%)`;
          this.portraitPoints.push({ x: left + midX, y: top + y, color, word: chosen.phrase, fontSize, alpha: .84 + tone * .14 });
          x += chosen.phraseWidth + gap;
        }
      }
    }
  }
  formPortrait() {
    if (!this.portraitPoints.length || this.portraitStarted) return;
    this.portraitStarted = true;
    this.lockedRotation = this.userRotation + (reducedMotion.matches ? 0 : (performance.now() - this.startedAt) * .000025);
    document.getElementById("scene-galaxy").classList.add("is-forming");
    this.portraitStartTime = performance.now();
  }
  start(){if(this.active)return;this.active=true;this.startedAt=performance.now();requestAnimationFrame(()=>{this.resize();if(this.context)this.draw(performance.now());});}
  stop(){this.active=false;cancelAnimationFrame(this.frame);}
  draw(time){
    if(!this.active||!this.context||!this.width||!this.height)return;
    const ctx=this.context,w=this.width,h=this.height;ctx.clearRect(0,0,w,h);
    const glow=ctx.createRadialGradient(w*.5,h*.51,0,w*.5,h*.51,Math.min(w,h)*.53);glow.addColorStop(0,"rgba(104,38,91,.22)");glow.addColorStop(.42,"rgba(66,26,75,.12)");glow.addColorStop(1,"rgba(9,8,17,0)");ctx.fillStyle=glow;ctx.fillRect(0,0,w,h);
    const cx=w*.5,cy=h*.53;
    for(const star of this.stars){ctx.globalAlpha=reducedMotion.matches ? .5 : .35 + (Math.sin(time*star.speed+star.phase)+1)*.32;ctx.fillStyle="#f8e8ef";ctx.fillRect(star.x,star.y,star.size,star.size);}
    const sceneElapsed = time - this.startedAt;
    const reveal = reducedMotion.matches ? 1 : Math.min(1, sceneElapsed / 1800);
    const rotation = this.portraitStarted ? this.lockedRotation : this.userRotation + (reducedMotion.matches ? 0 : sceneElapsed * .000025);
    if (!this.portraitStarted) {
      for (let i = 0; i < this.words.length; i++) {
        if (i / this.words.length > reveal) continue;
        const item = this.words[i];
        const angle = item.angle + item.radius * 5.2 + rotation;
        const x = cx + Math.cos(angle) * item.radius * w * .46;
        const y = cy + Math.sin(angle) * item.radius * h * .39;
        const fadeFromEdge = y < h * .2 || y > h * .8 ? .5 : 1;
        ctx.font = `${item.depth > .78 ? "500 " : "400 "}${item.size}px "Cormorant Garamond", Georgia, serif`;
        ctx.textAlign = "center"; ctx.textBaseline = "middle";
        ctx.globalAlpha = (.48 + item.depth * .42) * fadeFromEdge;
        ctx.shadowBlur = item.depth > .72 ? 5 : 0;
        ctx.shadowColor = `hsla(${item.hue},65%,72%,.6)`;
        ctx.fillStyle = `hsla(${item.hue},55%,${item.depth > .78 ? 83 : 73}%,1)`;
        ctx.fillText(item.text, x, y, 78);
      }
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      this.frame = requestAnimationFrame(next => this.draw(next));
      return;
    }
    const elapsed = time - this.portraitStartTime;
    const rawProgress = reducedMotion.matches ? 1 : Math.max(0, Math.min(1, elapsed / 4200));
    for (let i = 0; i < this.portraitPoints.length; i++) {
      const point = this.portraitPoints[i];
      const item = this.words[i % this.words.length];
      const angle = item.angle + item.radius * 5.2 + rotation;
      const startX = cx + Math.cos(angle) * item.radius * w * .46;
      const startY = cy + Math.sin(angle) * item.radius * h * .39;
      const delay = item.phase * .055;
      const wordProgress = reducedMotion.matches ? 1 : Math.max(0, Math.min(1, (rawProgress - delay) / (1 - delay)));
      const ease = wordProgress * wordProgress * (3 - 2 * wordProgress);
      const dx = point.x - cx, dy = point.y - cy;
      const targetX = cx + dx * Math.cos(rotation) - dy * Math.sin(rotation);
      const targetY = cy + dx * Math.sin(rotation) + dy * Math.cos(rotation);
      const x = startX + (targetX - startX) * ease;
      const y = startY + (targetY - startY) * ease;
      ctx.font = `${point.fontSize}px "Cormorant Garamond", Georgia, serif`;
      ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.globalAlpha = Math.min(1, .35 + wordProgress * .75) * point.alpha;
      ctx.shadowBlur = wordProgress > .9 ? 0 : 7;
      ctx.shadowColor = point.color; ctx.fillStyle = point.color;
      ctx.fillText(point.word, x, y);
    }
    ctx.globalAlpha = 1; ctx.shadowBlur = 0;
    this.frame=requestAnimationFrame(next=>this.draw(next));
  }
}
document.addEventListener("pointerdown",event=>{
  if(event.target.closest("button,a,label,textarea"))return;
  const heart=document.createElement("span");heart.className="burst-heart";heart.textContent="♥";heart.style.left=`${event.clientX}px`;heart.style.top=`${event.clientY}px`;
  heart.style.setProperty("--dx",`${(Math.random()-.5)*48}px`);heart.style.setProperty("--dy",`${-24-Math.random()*36}px`);
  document.querySelector(".heart-burst").append(heart);heart.addEventListener("animationend",()=>heart.remove(),{once:true});
});

window.addEventListener("pagehide",()=>{ stopGalaxy(); if (galaxy && galaxy.resizeObserver) galaxy.resizeObserver.disconnect(); if (galaxy && galaxy.resizeHandler) window.removeEventListener("resize", galaxy.resizeHandler); });



















