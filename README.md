# infocryptology
- �봽濡쒖젥�듃�뿉 contribute �븯湲곗쐞�빐�꽌 project owner 媛� contributor 濡� 異붽��빐以섏빞�븳�떎.
- 異붽��븯�젮�뒗 email �� 媛쒖씤 profile > setting �뿉�꽌 email �쓣 怨듦컻�빐以섏빞�븳�떎.
- contributor 媛� �릺湲� �쐞�빐�꽌 Angel-Study/webProject repository 瑜� fork �빐�빞�븳�떎.


## git config
1. 濡쒖뺄�뿉�꽌 �봽濡쒖젥�듃瑜� �떎�슫諛쏆쑝�젮�뒗 �뤃�뜑濡� �씠�룞
```
$ cd {path}
```
2. git init �꽕�젙
```
$ git init
```
3. git global �꽕�젙
```
$ git config --global user.name {username}
$ git config --global user.email {email}
```
4. �봽濡쒖젥�듃 clone
```
$ git clone git@github.com:Angel-Study/webProject.git
```
5. �봽濡쒖젥�듃�쓽 push url �꽕�젙 
- �봽濡쒖젥�듃 push �뒗 fork �맂 �봽濡쒖젥�듃濡� (ex) eunjeongsong/webProject
- merge request �뒗 蹂� �봽濡쒖젥�듃濡� (ex) Angel-study/webProject
```
$ git remote set-url --push origin git@github.com:eunjeongsong/webProject.git
```
5. remote 寃쎈줈媛� �떎�쓬怨� 媛숈쑝硫� �젙�긽�쟻�쑝濡� remote 媛� �꽕�젙�맂 寃�
- push url �� fork �맂 �봽濡쒖젥�듃
- fetch(pull) url �� 蹂� �봽濡쒖젥�듃
```
$ git remote -v
origin	git@github.com:Angel-Study/webProject.git (fetch)
origin	git@github.com:eunjeongsong/webProject.git (push)
```
6. �떎�슫諛쏆� �봽濡쒖젥�듃 �뤃�뜑濡� �씠�룞
```
$ cd webProject
```

## project push �젙梨�
1. 紐⑤뱺 contributor �뒗 濡쒖뺄�뿉�꽌 媛쒖씤 branch 瑜� �뵲�꽌 �옉�뾽�븳�떎.
- Merge request �뒗 fork �븳 repository �뿉 �깉濡쒖슫 釉뚮옖移섎�� �뵲�꽌 �벑濡앺븳�떎.
```
$ git branch {�옉�뾽釉뚮옖移섎챸}
```
2. push �븯湲� �쟾�뿉�뒗 �빆�긽 濡쒖뺄 master branch 濡� �씠�룞�빐 理쒖떊遺꾩쓣 pull 諛쏄퀬, push �븯�젮�뒗 branch 瑜� 理쒖떊 �긽�깭濡� 留뚮뱾�뼱以��떎.
```
$ git checkout master
$ git pull
$ git checkout {�옉�뾽釉뚮옖移섎챸}
$ git rebase master
```
3. remote �봽濡쒖젥�듃濡� push �븳�떎. (remote �봽濡쒖젥�듃�쓽 master 釉뚮옖移섍� �븘�땶 �떎瑜� 釉뚮옖移섎줈 push)
```
$ git add .
$ git commit -am "{�옉�뾽�궡�슜}"
$ git push origin {�옉�뾽釉뚮옖移섎챸}
```
4. [Angel-Study/webProject](https://github.com/Angel-Study/webProject/pulls)�뿉�꽌 "pull Request" 瑜� �깮�꽦�븳�떎.
- pull Request �쓽 commit message 瑜� �넻�빐 �뼱�뼡 �씠�뒋�뿉���븳 �궡�슜�쓣 �빐寃고뻽�뒗吏��뿉 ���븳 �깭源낆쓣 �빐以��떎. ex) resolve #{�씠�뒋踰덊샇} {而ㅻ컠�궡�슜} 
5. �봽濡쒖젥�듃 owner 媛� request 瑜� �솗�씤�빐 push �븳 �궡�슜�쓣 癒몄��빐以��떎.
6. Merge request �씠�썑 癒몄��맂 釉뚮옖移섎뒗 媛��뒫�븳 �궘�젣�븯怨�, �깉濡쒖슫 釉뚮옖移섎�� �뵲�꽌 �깉濡쒖슫 �옉�뾽�쓣 吏꾪뻾�븷 �닔 �엳�룄濡� �븳�떎.
```
$ git checkout master
$ git pull
$ git branch -D {�옉�뾽釉뚮옖移섎챸}
$ git checkout -b {�깉濡쒖슫釉뚮옖移섎챸}
```
- 釉뚮옖移섎�� �젣嫄고븳 寃쎌슦 濡쒖뺄�뿉�꽌 �듃�옒�궧 以묒씤 remote 釉뚮옖移� �젙蹂대�� �젣嫄고빐 以��떎.
```
# �듃�옒�궧 以묒씤 remote branch 媛� �엳�뒗 寃쎌슦 �꽌踰꾩뿉�꽌 �궘�젣�릺硫� 濡쒖뺄�뿉�꽌�룄 由щえ�듃 釉뚮옖移� �젙蹂닿� �궘�젣�맖.
$ git fetch -p
```

## coding convention
- 媛쒕컻 tool �� brackets2 瑜� �궗�슜�븳�떎.
- beautify �뵆�윭洹몄씤�쓣 �꽕移섑빐 肄붾뱶 �룷留룹쓣 留욎텣�떎.(硫붾돱 > �렪吏� > beautify �꽑�깮) 
