var tipuesearch = {"pages": [{'title': 'About', 'text': '\n https://github.com/ZHILIN-0817/site-ZHILIN-0817 \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'Course focus', 'text': '', 'tags': '', 'url': 'Course focus.html'}, {'title': 'w1~w3', 'text': '', 'tags': '', 'url': 'w1~w3.html'}, {'title': 'w4 video', 'text': '', 'tags': '', 'url': 'w4 video.html'}, {'title': 'w5 video', 'text': '', 'tags': '', 'url': 'w5 video.html'}, {'title': 'w6 video', 'text': '', 'tags': '', 'url': 'w6 video.html'}, {'title': 'cp2022 token', 'text': '', 'tags': '', 'url': 'cp2022 token.html'}, {'title': 'cp2022 brython', 'text': '', 'tags': '', 'url': 'cp2022 brython.html'}, {'title': 'NOTE', 'text': '', 'tags': '', 'url': 'NOTE.html'}, {'title': '建立cp2022', 'text': '1) 點選紅色框框 \n \n \n 2) 並複製裡完整內容 \n \n \n 3) 進到個人倉儲網站 打開source code 貼上(2)內容 \n \n \n 4)  最後save \xa0 \n \n \n 5) 完成上述內容再轉generate pages\xa0 \n \n', 'tags': '', 'url': '建立cp2022.html'}, {'title': 'cp指令', 'text': 'cd tmp \n \n cd site-ZHILIN-0817 \n \n cms \n \n 最後複製以下網址 \n 進到個人倉儲修改內容 \n \n \n', 'tags': '', 'url': 'cp指令.html'}, {'title': '建立stud.cycu.org', 'text': '到gmail2000 找到自己的密碼 \n 並到teams w8~w9 recodings 照影片步驟....... \n', 'tags': '', 'url': '建立stud.cycu.org.html'}, {'title': 'TCExam', 'text': 'tcexam 考試時間只允許使用ipv6網路連線 \n 若要從外部連到考試主機, 可以利用: \xa0 Proxy: 140.130.17.4\xa0 \xa0port 3128\xa0 \xa0 \n 如果還是不行，就用學校電腦考試 \n server {\n    listen       [::]:80 default ipv6only=on;\n    server_name  domain.cycu.org;\n    #return       301 https://$server_name$request_uri;\n     \n    allow 2001:288:6004:xx::0/32;\n    deny all;\n \nreturn 302 https://domain.cycu.org;\n     \n    #location /{\n        #root C:/tcexam/downloads;\n        #auth_basic "For Authorized Users Only!";\n        #auth_basic_user_file C:/tcexam/nginx-1.20.1/.htpasswd;\n    #}\n} \n', 'tags': '', 'url': 'TCExam.html'}, {'title': 'cp2022', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Blockt \n', 'tags': '', 'url': 'cp2022.html'}, {'title': 'CP 靜態網頁連結', 'text': '學習 Brython 程式語言 \n 執行 Three.js 相關 Brython 程式, 需要將 \xa0 pyweb3d.py \xa0 放入 downloads/py 目錄中 \n \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n  啟動 Brython  \n', 'tags': '', 'url': 'CP 靜態網頁連結.html'}, {'title': 'Homework', 'text': '', 'tags': '', 'url': 'Homework.html'}, {'title': 'week13', 'text': '\'\'\'\nf = c*9/5 + 32\nc = (f-32)*5/9\n\'\'\'\nc = input("請輸入攝氏溫度值")\nc = float(c)\nprint(c, type(c)) \n', 'tags': '', 'url': 'week13.html'}, {'title': 'week6', 'text': '\n \n 學習 Brython 程式語言 \n 執行 Three.js 相關 Brython 程式, 需要將 \xa0 pyweb3d.py \xa0 放入 downloads/py 目錄中 \n 心得:沒修過這門課，但經過幾個禮拜的時間有在慢慢熟悉這門課，這學期感覺加入很多新課程內容，跟以往課程最不同的是加入 TCExam。還有上課過程使用teams上課，有什麼不懂的地方有影片可以重複觀看。還有記事本可以讓每次上課內容更快找到重點.......', 'tags': '', 'url': 'week6.html'}, {'title': 'week10', 'text': '\n 利用 Python 或 Brython 讀取  JSON  檔案: \n 1b w10 小考結果 為  JSON  檔案格式, 請各小組編寫程式處理這個檔案資料, 並回答下列問題: \n 1) 請問是否能夠以此 小考結果檔案 作為輸入, 直接列出該班缺考人員學號? \n 2) 承上, 若將缺考者得分視為 0 分, 是否可以列出以該班選課人員學號作為第一欄資料, 而第二欄位則為本次考試的成績? \n \n \n w10 homework 考試 心得', 'tags': '', 'url': 'week10.html'}, {'title': 'week11', 'text': '\n 請在個人網站中新增一個 H1 格式, 標題為 HW 的網站, 將各週作業內容、心得與討論, 以小寫的 w10, w11\xa0 \n w11 作業: \n \n import ast\n# get stud_list first\ndef get_stud(c_name):\n    courses = {"1a": "0747", "1b": "0761", "2a": "0773", "2b": "0786"}\n    #c_name = "1b"\n    c = courses[c_name]\n    url = "https://nfu.cycu.org/?semester=1111&courseno=" + c + "&column=True"\n    data = open(url).read().split("\\n")\n    stud = data[:-1]\n    return stud\n    \ncp_stud = get_stud("1b")\n# get w10 quiz result\ncp_w11_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/8e59f90d8ff4f1ad4fecd4f7ee159f91eb6addf9/cp1b_w11_quiz_result.json"\ncp_w10_quiz_url = "https://gist.githubusercontent.com/mdecycu/9df4b372ac1b7386cf259ced15f1a2b2/raw/a6825f13b1bb0b61e09e74dd117729eefe1d947f/20221110_cp1b_w10_quiz.json"\ndef get_score(url):\n    num_stud = 0\n    total_score = 0\n    json_data = open(url).read()\n    big_dict = ast.literal_eval(json_data)\n    data = big_dict["body"]["testuser"]\n    quiz_dict = {}\n    for i in data:\n        stud_id = data[i]["user_name"]\n        stud_score = int(float(data[i]["total_score"]))\n        quiz_dict[stud_id] = stud_score\n        num_stud = num_stud + 1\n        total_score = total_score + stud_score\n    return quiz_dict, num_stud, total_score\n    \n#cp_quiz, num_stud, total_score = get_score(cp_w10_quiz_url)\ncp_quiz, num_stud, total_score = get_score(cp_w11_quiz_url)\ncp_abs = []\nfor stud in cp_stud:\n    try:\n        print(stud, cp_quiz[stud])\n    except:\n        # 缺考者沒有 quiz 成績\n        print(stud, "缺")\n        cp_abs.append(stud)\nprint("\\n考試平均分數為:", int(total_score/num_stud))\n# 列出缺考名單\nprint("="*20)\nprint("以下為 w10 缺考名單:")\nfor stud in cp_abs:\n    print(stud) \n \n', 'tags': '', 'url': 'week11.html'}, {'title': 'week12', 'text': '\n \n 將攝氏與華氏溫度單位轉換的公式列入. \n 請利用  https://www.diagrams.net  繪製一個攝氏與華氏溫度轉換的程式設計流程圖, 完成後將流程圖轉為 .png 格式後嵌入 w12 頁面中. \n 請根據程式設計流程圖, 在 w12 頁面中直接加入一個 Brython 程式, 使能在頁面中印出今天的日期、時間與該時間點的攝氏及華氏溫度. 例如:  今天是 2022 年 11 月 24 日, 現在時間 10:35, 攝氏溫度為 29 度, 華氏為 84.2 度 . \n 接下來請利用 Brython 程式語法中的 input() 在 w12 頁面中讓使用者按下"溫度換算"按鈕後, 跳出讓使用者輸入攝氏溫度值, 讓溫度單位轉換程式運算後, 可以同時列出使用者所輸入的攝氏與華氏溫度值. \n \n \n ex1 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp)) \n ex2 \n # Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\nuser_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\nprint(type(user_input_temp))\n# 到這裡已知利用 input() 函式將傳回字串, 接著以 float() 將字串轉為浮點數\nuser_input_temp = float(user_input_temp)\n# 因為攝氏溫度乘上 9/5 之後再加上 32 就可以得到對應的華氏溫度值\nFahrenheit = (user_input_temp*9/5) + 32\n# 到這裡, Fahrenheit 資料型別為浮點數, 而 user_input_temp 在第 8 行也轉為浮點數\n# 要將兩個浮點數與字串相加, 都必須透過 str() 轉為字串\nprint("攝氏 " + str(user_input_temp) + " 度, 等於華氏 " + str(Fahrenheit) + " 度.") \n \n \n \n', 'tags': '', 'url': 'week12.html'}, {'title': 'w12-1', 'text': '取使用者輸入 \n \n <h3>w12-1</h3>\n<!-- \n在動態網站頁面中啟用 Brython 執行環境的用法, 請注意動態網站執行所在路徑\n-->\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<p>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'/downloads/py/\']});\n}\n// ]]></script>\n<!-- 以下事先在頁面中加入 id="brython_div" 的 div 標註\n之後可利用 Brython 的 document 模組與此 html 標註對應\n--></p>\n<!-- 利用 html 建立一個 id="btn1" 的按鈕 -->\n<p><button id="btn1">取使用者輸入</button></p>\n<div id="brython_div"></div>\n<p>\n<script type="text/python">// <![CDATA[\nfrom browser import html, document\n# Brython 的 input() 可以接受輸入提示字串, 跳出瀏覽器輸入表單後, 將輸入內容以字串取回\n#user_input_temp = input("請輸入攝氏溫度值:")\n# 接著列出 user_input_temp 變數的資料型別\n# 但是在頁面中 Brython 的 print() 將會顯示在 log 而非頁面\n#print(type(user_input_temp))\n# 這裡定義一個 brython_div 變數, 透過 document[] 與頁面中 id="brython_div" 的位置對應\nbrython_div = document["brython_div"]\n# 看能不能直接將變數值字串列在標註 id 為 "brython_div" 的頁面位置\n#brython_div <= user_input_temp\n# 之後若要列出 html, 則需要透過 Brython 的 html 模組\n# 接下來要設法按下按鈕之後才執行取使用者 input 的流程\n# 首先 comment 掉前面的 input() 與 print(), 同時蓋掉輸出, 並利用事件導向設計一個函式\ndef get_input(env):\n    user_input_temp = input("請輸入攝氏溫度值:")\n    brython_div <= user_input_temp\n# 透過 Brython browser 模組中的 document 物件將 id="btn1" 的物件中的 bind() 方法\n# 讓使用者 click 後會經由瀏覽器中的 event 通知執行 get_input 函式\ndocument["btn1"].bind(\'click\', get_input)\n// ]]></script>\n</p> \n \n \n \n \n \n', 'tags': '', 'url': 'w12-1.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation \n Variables \n Comments \n Numbers \n Strings \n print \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束 ', 'tags': '', 'url': 'Brython.html'}]};