/**
 * pvp Header JS
 * Author: sonichuang
 * Create: 2017-05-31
 */
var pvpHeader = (function(){
	var util = {},
		fn = {},
		$header = "",
		init = function(){};

	var isOldHeader = $("body").hasClass("old-header") ? true : false;

	fn = {
		jsLoader: function(url, callback, options) {
			options = options || {};
			var head = document.getElementsByTagName('head')[0] || document.documentElement,
				script = document.createElement('script'),
				done = false;
			script.src = url;
			if (options.charset) {controller
				script.charset = options.charset;
			}
			script.onerror = script.onload = script.onreadystatechange = function() {
				if (!done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
					done = true;
					if (callback) {
						callback();
					}
					script.onerror = script.onload = script.onreadystatechange = null;
					head.removeChild(script);
				}
			};
			head.insertBefore(script, head.firstChild);
		}
	};

	util.addHeaderHTML = function(){
		if(isOldHeader){
			var loginSup = '';
			var loginSub = '';
				loginSub +='<!--=========����Ӣ�ۺ��û���¼==========-->';
				loginSub +='<div class="info-box clearfix">';
				loginSub +='  <div class="hero-box fl pr">';
				loginSub +='	<p id="FreeHeros-Title"><b>����Ӣ�ۣ�<span id="freeHerosPeriod"></span>��</b></p>';
				loginSub +='	<ul id="FreeHeros-Cont" class="hero-list clearfix">������...</ul>';
				loginSub +='	<a href="/web201605/herolist.shtml" onclick="PTTSendClick(\'head\',\'morehero\',\'����Ӣ��\');" target="_blank" title="����Ӣ��" class="more-hero pa">��<br>��<br>Ӣ<br>��</a>';
				loginSub +='  </div>';
				loginSub +='  <div class="login-box clearfix fl pr">';
				loginSub +='	<a class="avatar pa spr" href="/web201605/personal.shtml">';
				loginSub +='	  <img src="//game.gtimg.cn/images/yxzj/web201605/main/avatar1.jpg" width="75" height="75">';
				loginSub +='	  <span class="pa spr level-ico db">0</span>';
				loginSub +='	</a>';
				loginSub +='	<!--=====��¼����ѡ�����=====-->';
				loginSub +='	<div id="logined_selected" class="per-infor fl" style="display:none;">';
				loginSub +='	  <p class="user-name f12">';
				loginSub +='		<em>�û�����</em>';
				loginSub +='		<i id="nickname">--</i>';
				loginSub +='		<a class="logout_btn" href="javascript:void(0)">ע��</a>';
				loginSub +='		<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">�л�����&gt;</a>';
				loginSub +='	  </p>';
				loginSub +='	  <ul class="userinfo-list tc">';
				loginSub +='		<li><em class="grade_level">��ǿ��ͭIII</em><i>��λ</i></li>';
				loginSub +='		<li><em class="win_count">-</em><i>ʤ��</i></li>';
				loginSub +='		<li><em class="hero_count">-</em><i>Ӣ����</i></li>';
				loginSub +='		<li><em class="skin_count">-</em><i>Ƥ����</i></li>';
				loginSub +='	  </ul>';
				loginSub +='	</div>';
				loginSub +='	<!--=====��¼ǰ=====-->';
				loginSub +='	<div id="unlogin" class="per-infor txt2 fl" style="display:block;">';
				loginSub +='	  <p class="user-name">';
				loginSub +='		�װ����ٻ�ʦ����ӭ';
				loginSub +='  <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSub\',\'��¼\');">��¼</a>';
				loginSub +='	  </p>';
				loginSub +='	</div>';
				loginSub +='	<!--=====��¼��δѡ�����=====-->';
				loginSub +='	<div id="logined_not_selected" class="per-infor txt2 fl" style="display:none;">';
				loginSub +='	  <p class="user-name">';
				loginSub +='		���ѵ�¼����<a class="select_role" href="javascript:void(0)">ѡ�����</a>������<a class="logout_btn" href="javascript:void(0)">ע��</a>';
				loginSub +='		<!--���ѵ�¼������������δ����<a class="logout_btn" href="javascript:void(0)">ע��</a>-->';
				loginSub +='	  </p>';
				loginSub +='	  <!--p>��¼��鿴�Լ���Ӣ��������Ϸ��Ϣ�������ٻ�ʦ�ȼ�����Ϸʤ�������˻���Ϣ������ֵ �ȡ�</p-->';
				loginSub +='	</div>';
				loginSub +='  </div>';
				loginSub +='</div><!--=========����Ӣ�ۺ��û���¼==========-->';
				// loginSub +='<a target="_blank" href="javascript:;" onClick="PTTSendClick(\'btn\',\'subtopkv\',\'����ר��\');"  class="kv-link" title="�鿴����">�鿴����</a>';		
				loginSub +='<a target="_blank" href="//pvp.qq.com/cp/a20170925wzhd/" onclick="PTTSendClick(\'btn\',\'topkv-anni1\',\'������-����\');" class="kv-anni kv-anni-1" title="����">���궨�ƻ�</a>';
				loginSub +='<a href="javascript:;" onclick="TGDialogS(\'vote1001\');PTTSendClick(\'btn\',\'topkv-anni2\',\'������-����ͶƱ\');" class="kv-anni kv-anni-2" title="����ͶƱ">����ͶƱ</a>';
				loginSub +='<a target="_blank" href="//pvp.qq.com/cp/a20170926wzrymusic_pc/" onclick="PTTSendClick(\'btn\',\'topkv-anni3\',\'������-Ӣ�������\');" class="kv-anni kv-anni-3" title="Ӣ�������">Ӣ�������</a>';
				loginSub +='<a target="_blank" href="//pvp.qq.com/cp/a20170925trds/" onclick="PTTSendClick(\'btn\',\'topkv-anni4\',\'������-ͬ�˴���\');" class="kv-anni kv-anni-4" title="ͬ�˴���">ͬ�˴���</a>';
		}else{
			var loginSub = '';
			var loginSup = '';
				loginSup +='      <!--=====��¼ģ��=====-->';
				loginSup +='      <div class="login_pannel clearfix pa">';
				loginSup +='        <a class="avatar user_pic " href="/web201605/personal.shtml">';
				loginSup +='          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAABGdBTUEAALGPC/xhBQAAARpQTFRF88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JY88JYAAAA88JYAMCn0QAAAF10Uk5TZBSP1dYNDujnLPuA3/zQAos0UjmnB8KcgZrNkfGwCdhthtnjysFgCFAZSuQWKYNXh9IbREw+9iRhdyPlZRNdvRwnMRrvNf3F3isBtz+eRfPha+v3O+718Gm0eB4AqcfmkwAAAUBJREFUOMvt1FWTg0AMAOCeu7u71t3dFS+FJv//b9wCnbu5YwI83VPzsBvYb2aRbHzgOXxzartTLbGhVPVAN9Z0NurrXVdaE9GkKNZcaFPBVBJ6kEyh0nSksoqYAVgEyCCqsgMdcIjIpxOYSPMs4wYkHY3RiPwSLufNbDyiqIp/Q6Iob6MqRZ9t9ImiNzZ6R9ELG72k6Dl22q1v1mp38JSiE9SgLpR3mNssC3XQ2DVBD62lBR2zRSPR8JiiR9jIrgDEwhiOAazqDTyjaI7trMQhwqYIxBU2XVH01nibCYTYGGIPzuKBLJdrkwb86A9YVCfpI1uNBkHmZAhGDSqQ9MUspwLkwGcV2StJh9bHn8J09hs+Sfo2/EXFd6ezVZB+aP/D+cQebM+odN9z6wPFvkl3ux66y95WBSr7J/NW/F/0C0EhZNPgBN3FAAAAAElFTkSuQmCC" width="42" height="42">';
				loginSup +='        </a>';
				loginSup +='        <!--=====��¼����ѡ�����=====-->';
				loginSup +='        <div id="logined_selected" class="per-infor" style="display:none;">';
				loginSup +='          <p class="user-name f12">';
				loginSup +='            <i id="nickname">--</i>';
				loginSup +='            <a class="logout_btn" href="javascript:void(0)">ע��</a>';        
				loginSup +='            <!--<a class="select_role" style="color:#2d84d3" href="javascript:void(0)">�л�����&gt;</a>-->';
				loginSup +='          </p>';
				loginSup +='          <p class="personal_link"><a href="//pvp.qq.com/web201605/personal.shtml">����鿴��Ϸս��</a></p>';
				loginSup +='          <ul class="userinfo-list tc">';
				loginSup +='            <li><em class="grade_level">��ǿ��ͭIII</em><i>��λ</i></li>';
				loginSup +='            <li><em class="win_count">-</em><i>ʤ��</i></li>';
				loginSup +='            <li><em class="hero_count">-</em><i>Ӣ����</i></li>';
				loginSup +='            <li><em class="skin_count">-</em><i>Ƥ����</i></li>';
				loginSup +='          </ul>';
				loginSup +='        </div>';
				loginSup +='        <div id="unlogin" class="per-infor unlogin_pannel">';
				loginSup +='          <span class="unlogin_user_pic"></span>';
				loginSup +='          <div class="unlogin_info">';
				loginSup +='            <a href="javascript:TGDialogS(\'login_select\');" onclick="PTTSendClick(\'head\',\'loginBtnSup\',\'��ӭ��¼\');">��ӭ��¼</a>';
				loginSup +='            <p>��¼��鿴��Ϸս��</p>';
				loginSup +='          </div>';
				loginSup +='        </div>';
				loginSup +='        <!--=====��¼��δѡ�����=====-->';
				loginSup +='        <div id="logined_not_selected" class="per-infor" style="display:none;">';
				loginSup +='          <div class="user-name">';
				loginSup +='            ���ѵ�¼';
				loginSup +='            <p>��<a class="select_role" href="javascript:void(0)">ѡ�����</a>������<a class="logout_btn" href="javascript:void(0)">ע��</a></p>';
				loginSup +='            <!--���ѵ�¼������������δ����<a class="logout_btn" href="javascript:void(0)">ע��</a>-->';
				loginSup +='          </div>';
				loginSup +='        </div>';
				loginSup +='      </div><!--=====��¼ģ��=====-->';
		}
		var headerHTML = '';
		headerHTML +='<div id="header" class="header">';
		headerHTML +='    <div class="header-inner">';
		headerHTML +='      <h1><a href="//pvp.qq.com/" class="logo pa" title="������ҫ" onclick="PTTSendClick(\'headNav\',\'logo\',\'logo\');">������ҫ</a></h1>';
		headerHTML +='      <!--=========������==========-->';
		headerHTML +='      <ul class="main-nav clearfix">';
		headerHTML +='        <li class="first-nav">';
		headerHTML +='          <a href="//pvp.qq.com/" target="_blank" title="������ҳ" onclick="PTTSendClick(\'headNav\',\'home\',\'������ҳ\');">������ҳ<em>HOME</em></a>';
		headerHTML +='        </li>';
		headerHTML +='        <li>';
		headerHTML +='          <a href="/web201605/herolist.shtml" target="_blank" title="��Ϸ����" onclick="PTTSendClick(\'headNav\',\'data\',\'��Ϸ����\');">��Ϸ����<em>DATA</em></a>';
		headerHTML +='        </li>';
		headerHTML +='        <li>';
		headerHTML +='          <a href="/raiders/" target="_blank" title="��������" onclick="PTTSendClick(\'headNav\',\'strategy\',\'��������\');">��������<em>RAIDERS</em></a>';
		headerHTML +='        </li>';
		headerHTML +='        <li>';
		headerHTML +='          <a href="/match/kpl/index.shtml" target="_blank" title="��������" onclick="PTTSendClick(\'headNav\',\'match\',\'��������\');">��������<em>MATCH</em></a>';
		headerHTML +='        </li>';
		headerHTML +='        <li>';
		headerHTML +='          <a href="/mall/" target="_blank" title="�̳�/����" onclick="PTTSendClick(\'headNav\',\'store\',\'�̳Ǻ���\');">�̳�/����<em>STORE</em></a>';
		headerHTML +='        </li>';
		headerHTML +='        <li>';
		headerHTML +='          <a href="javascript:void(0)" title="��������" onclick="PTTSendClick(\'headNav\',\'Community\',\'��������\');">��������<em>COMMUNITY</em></a>';
		headerHTML +='        </li>';
		headerHTML +='        <li>';
		headerHTML +='          <a href="javascript:void(0)" target="_blank" title="���֧��" onclick="PTTSendClick(\'headNav\',\'player\',\'���֧��\');">���֧��<em>PLAYER</em></a>';
		headerHTML +='        </li>';
		headerHTML +='      </ul>';
		headerHTML += loginSup;
		headerHTML +='    </div>';
		headerHTML +='    <!--=====��������=====-->';
		headerHTML +='      <div id="J_subNav" class="sub-nav">';
		headerHTML +='        <ul class="sub-nav-inner">';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='             &nbsp;';
		headerHTML +='          </li>';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='             <a href="/cp/a20170829bbgxsm/index.html" target="_blank" title="�汾����" onclick="PTTSendClick(\'headNav\',\'data_ver\',\'�汾����\');">�汾����</a>';
		headerHTML +='             <a href="/web201605/introduce.shtml" target="_blank" title="��Ϸ����" onclick="PTTSendClick(\'headNav\',\'data_moba\',\'��Ϸ����\');">��Ϸ����</a>';
		headerHTML +='             <a href="/web201605/herolist.shtml" target="_blank" title="Ӣ������" onclick="PTTSendClick(\'headNav\',\'data_hero\',\'Ӣ������\');">Ӣ������</a>';
		headerHTML +='             <a href="/coming/" target="_blank" title="����վ" onclick="PTTSendClick(\'headNav\',\'data_coming\',\'����վ\');">����վ</a>';
		headerHTML +='             <a href="javascript:void(0)" title="����վ" onclick="TGDialogS(\'story\');PTTSendClick(\'headNav\',\'data_story\',\'����վ\');">����վ</a>';
		headerHTML +='             <a href="/web201605/wallpaper.shtml" target="_blank" title="��Ϸ��ֽ" onclick="PTTSendClick(\'headNav\',\'data_wallpaper\',\'��Ϸ��ֽ\');">��Ϸ��ֽ</a>';
		headerHTML +='          </li>';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='             <a href="/raiders/" target="_blank" title="��������" onclick="PTTSendClick(\'headNav\',\'strategy_center\',\'��������\');">��������</a>';
		headerHTML +='             <a href="/strategy/" target="_blank" title="Ӣ�۹���" onclick="PTTSendClick(\'headNav\',\'strategy_hero\',\'Ӣ�۹���\');">Ӣ�۹���</a>';
		headerHTML +='             <a href="/v/" target="_blank" title="��Ƶ����" onclick="PTTSendClick(\'headNav\',\'strategy_video\',\'��Ƶ����\');">��Ƶ����</a>';
		headerHTML +='          </li>';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='             <a href="/match/kpl/" target="_blank" title="KPLְҵ����" onclick="PTTSendClick(\'headNav\',\'match_KPL\',\'KPL\');">KPLְҵ����</a>';
		headerHTML +='             <a href="/match/kcc.shtml" target="_blank" title="KCC���߹ھ���" onclick="PTTSendClick(\'headNav\',\'match_KCC\',\'KCC\');">KCC���߹ھ���</a>';
		headerHTML +='             <a href="/cp/a20170808city/index.shtml" target="_blank" title="KOC���߳�����" onclick="PTTSendClick(\'headNav\',\'match_KOC\',\'KOC\');">KOC���߳�����</a>';
		headerHTML +='             <a href="https://ui.ptlogin2.qq.com/cgi-bin/login?style=9&appid=809041606&daid=18&low_login=0&s_url=http%3A%2F%2Fyouxi.vip.qq.com%2Fm%2Fact%2F201603%2Fcfm_yxzj_qgc.html%3Fjsonid%3D90228%26game%3Dsgame%26onlyqq%3Dfalse%26_wv%3D1" target="_blank" title="QGC�ļ�����" onclick="PTTSendClick(\'headNav\',\'match_QGC\',\'QGC\');">QGC�ļ�����</a>';
		headerHTML +='             <a href="//tga.qq.com/match/2016/shouyou/game.html?game=wzry&tga=1" target="_blank" title="TGA����" onclick="PTTSendClick(\'headNav\',\'match_TGA\',\'TGA\');">TGA����</a>';
		headerHTML +='             <a href="javascript:alert(\'�����ڴ�\')" target="_blank" title="WGC��Ӣ��" onclick="PTTSendClick(\'headNav\',\'match_WGC\',\'WGC\');">WGC��Ӣ��</a>';
		headerHTML +='             <a href="//pvp.qq.com/cp/a20170818school/index.shtml" target="_blank" title="���߸�У����" onclick="PTTSendClick(\'headNav\',\'match_gaoxiao\',\'���߸�У����\');">���߸�У����</a>';
		headerHTML +='          </li>';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='             <a href="/mall/" target="_blank" title="�ܱ��̳�" onclick="PTTSendClick(\'headNav\',\'mall\',\'�ܱ��̳�\');">�ܱ��̳�</a>';
		headerHTML +='             <a href="/cp/a20170707zhhz" target="_blank" title="�������ÿ�" onclick="PTTSendClick(\'headNav\',\'life_Credit\',\'�������ÿ�\');">�������ÿ�</a>';
		headerHTML +='             <a href="/history/" target="_blank" title="�����Ļ�վ" onclick="PTTSendClick(\'headNav\',\'history\',\'�����Ļ�վ\');">�����Ļ�վ</a>';
		headerHTML +='          </li>';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='            <a href="javascript:void(0)" title="�ٷ�����" onclick="TGDialogS(\'zhushou\');PTTSendClick(\'headNav\',\'Community_tools\',\'�ٷ�����\');">�ٷ�����</a>';
		headerHTML +='            <a href="https://buluo.qq.com/p/barindex.html?bid=227061" target="_blank" title="��Q����" onclick="PTTSendClick(\'headNav\',\'Community_qq\',\'��Q����\');">��Q����</a>';
		headerHTML +='            <a href="javascript:void(0)" target="_blank" title="΢��Ȧ��" onclick="TGDialogS(\'weiquan\');PTTSendClick(\'headNav\',\'Community_wx\',\'΢��Ȧ��\');">΢��Ȧ��</a>';
		headerHTML +='            <a href="//weibo.com/heromoba" target="_blank" title="�ٷ�΢��" onclick="PTTSendClick(\'headNav\',\'Community_wb\',\'�ٷ�΢��\');">�ٷ�΢��</a>';
		headerHTML +='            <a href="javascript:void(0)" title="΢�Ź��ں�" onclick="TGDialogS(\'weixin\');PTTSendClick(\'headNav\',\'Community_wxgzh\',\'΢�Ź��ں�\');">΢�Ź��ں�</a>';
		headerHTML +='            <a href="javascript:void(0)" title="��Q���ĺ�" onclick="TGDialogS(\'qq\');PTTSendClick(\'headNav\',\'Community_qqdyh\',\'��Q���ĺ�\');">��Q���ĺ�</a>';
		headerHTML +='          </li>';
		headerHTML +='          <li class="down-nav">';
		headerHTML +='             <a href="https://jiazhang.qq.com/jz/home.html " target="_blank" title="�ɳ��ػ�ƽ̨" onclick="PTTSendClick(\'headNav\',\'player_watch\',\'�ɳ��ػ�ƽ̨\');"><i class="icon-guard"></i>�ɳ��ػ�ƽ̨</a>';
		headerHTML +='             <a href="/cp/a20170726hsbbspc/index.html" target="_blank" title="����ϵͳ" onclick="PTTSendClick(\'headNav\',\'player_healthy\',\'����ϵͳ\');"><i class="icon-health"></i>����ϵͳ</a>';
		headerHTML +='             <a href="javascript:void(0)" target="_blank" title="�ͷ�ר��" onclick="TGDialogS(\'kefu\');PTTSendClick(\'headNav\',\'player_kf\',\'�ͷ�ר��\');">�ͷ�ר��</a>';
		headerHTML +='             <a href="/webplat/info/news_version3/15592/24091/24092/24095/m15241/201508/370256.shtml" title="����һ�" onclick="PTTSendClick(\'headNav\',\'player_feedback\',\'����һ�\');" target="_blank">����һ�</a>';
		headerHTML +='             <a href="https://tool.helper.qq.com/v3/wzry/official_website/index.html" title="��������" onclick="PTTSendClick(\'headNav\',\'player_service\',\'��������\');" target="_blank">��������</a>';
		headerHTML +='          </li>';
		headerHTML +='        </ul>';
		headerHTML +='      </div>';
		headerHTML += loginSub;
		headerHTML +='</div>';
		headerHTML +='<div class="header-dialog">';
		headerHTML +='  <div class="pop pr" style="display:none;" id="login_select">';
		headerHTML +='    <a href="javascript:showDialog.hide()" class="close pa db ht">�ر�</a>';
		headerHTML +='    <a href="javascript:void(0)" id="wxlogin" class="wx-login pa db ht">΢���û���¼</a>';
		headerHTML +='    <a href="javascript:void(0)" id="qqlogin" class="qq-login pa db ht">QQ�û���¼</a>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="pop2 pr" style="display:none;" id="area_select">';
		headerHTML +='    <a href="javascript:showDialog.hide()" class="close pa db ht">�ر�</a>';
		headerHTML +='    <div class="se-input">';
		headerHTML +='      <select name="channelContentId" id="channelContentId"><option selected>ѡ������</option></select>';
		headerHTML +='      <select name="areaContentId" id="areaContentId"><option selected>ѡ�����</option></select>';
		headerHTML +='      <select name="roleContentId" id="roleContentId"><option selected>ѡ���ɫ</option></select>';
		headerHTML +='    </div>';
		headerHTML +='    <div class="se-btn clearfix">';
		headerHTML +='      <a id="RoleSelectBtn" href="javascript:showDialog.hide()" class="fl ht">ȷ��</a>';
		headerHTML +='      <a href="javascript:showDialog.hide()" class="fl ht">ȡ��</a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="zhushou pr" id="zhushou" style="display:none">';
		headerHTML +='    <div class="dia-zhushou pr">';
		headerHTML +='       <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="weixin pr" id="weixin" style="display:none">';
		headerHTML +='    <div class="dia-weixin pr">';
		headerHTML +='       <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="story pr" id="story" style="display:none">';
		headerHTML +='    <div class="dia-story">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="skin pr" id="skin" style="display:none">';
		headerHTML +='    <div class="dia-skin">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="version pr" id="version" style="display:none">';
		headerHTML +='    <div class="dia-version">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='   <div class="weiquan pr" id="weiquan" style="display:none">';
		headerHTML +='    <div class="dia-weiquan">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="hero_pop pr" id="hero_pop" style="display:none">';
		headerHTML +='    <div class="dia-hero-pop">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='  <div class="kefu pr" id="kefu" style="display:none">';
		headerHTML +='    <div class="dia-kefu">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='      <p>΢��ɨһɨ����ϵ�ͷ�</p>';
		headerHTML +='    </div> ';
		headerHTML +='  </div>';
		headerHTML +='  <div class="qq pr" id="qq" style="display:none">';
		headerHTML +='    <div class="dia-qq">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
 		headerHTML +='  <div class="vote1001 pr" id="vote1001" style="display:none">';
		headerHTML +='    <div class="dia-vote1001">';
		headerHTML +='      <a class="dia-close" href="javascript:showDialog.hide()" title="�ر�"></a>';
		headerHTML +='    </div>';
		headerHTML +='  </div>';
		headerHTML +='</div>';
		$("#header").remove(); // if include header.inc, remove div#header
		$("body").prepend(headerHTML);
		$header = $("#header");
	};

	util.headerFunc = function(){
		 $('#header .header-inner, #J_subNav').hover(function(){
		   $('#J_subNav').css('visibility','visible');
		 },function(){
		   $('#J_subNav').css('visibility','hidden');})
		if(isOldHeader){
			util.headerFreeHeroPeriod();
			util.headerFreeHeroInit();
			util.setKVLink();
		}
	};

	util.headerFreeHeroInit = function(){
		sUrl = 'http://game.gtimg.cn/images/yxzj/img201606/heroimg/';

		$("#FreeHeros-Cont").on("mouseenter","li",function(){
			var _self = $(this),
				_selfImg = _self.find("img"),
				hid = _selfImg.data("id");
			// console.log(hid);
			_selfImg.attr('src',sUrl+hid+'/'+hid+'-freehover.png');
			_self.siblings("li").find("img").each(function(i){
				hhid = $(this).data("id");
				// console.log(hhid);
				$(this).attr("src",sUrl+hhid+'/'+hhid+'.jpg');
			});
			_self.addClass("active").siblings("li").removeClass("active");

		});
		$.ajax({
			url: '//pvp.qq.com/web201605/js/herolist.json',
			dataType: 'json',
			success: function(data) {
				// console.log(data);
				var freeHeroData = [],
					freeHeroHtml = "";
				for(var i=0; i<data.length; i++){
					var payarr = [],
                		payarr = ('' + data[i].pay_type).split(',');
					if(payarr == 10 || payarr[0] == 10 || payarr[1] == 10){
						freeHeroData.push(data[i]);
					}
				}
				// console.log(freeHeroData);
				for(var i=0; i<freeHeroData.length; i++){
					var hid = freeHeroData[i].ename;
					freeHeroHtml += '<li>';
					freeHeroHtml += '	<a href="http://pvp.qq.com/web201605/herodetail/'+hid+'.shtml" target="_blank" onclick="PTTSendClick(\'header\',\'freeHero-'+i+'\',\'����Ӣ��\');">';
					freeHeroHtml += '		<img data-id="'+hid+'" src="'+sUrl+''+hid+'/'+hid+'.jpg" width="69" height="69">';
					freeHeroHtml += '	</a>';
					freeHeroHtml += '</li>';
				}
				// console.log(freeHeroHtml);
				$("#FreeHeros-Cont").html(freeHeroHtml);
				$("#FreeHeros-Cont li").eq(0).trigger("mouseenter");
			},
			error: function (xhr, type) {
				console.log("get herolist.json error!")
			}
		});
	};

	util.headerFreeHeroPeriod = function(){
		/* Ӣ���޷�ʱ����䣬һ��Ϊ��1-���� */
		// ��ȡ��ǰ������ʱ��
		function getServerTime(callback) {
			$.getScript('//apps.game.qq.com/CommArticle/app/reg/gdate.php?t=' + new Date().getTime(), function() {
				var serverDate = json_curdate,
					date = new Date(serverDate.replace(/-/g,"/"));
				callback && callback(date);
			});
		}
		function getDateStr(date,offset){
			var dateSet = date || new Date(),
				offset = offset || 0;
			var h = new Date();
			h.setDate(dateSet.getDate()+offset);
			var set =[];
			set.push(h.getFullYear());
			set.push(h.getMonth() + 1);
			set.push(h.getDate());
			// return set[0] + '-' + set[1] + '-' + set[2];
			return set[1] + '��' + set[2] + '��';
		}
		var freeHeroDayFill = function(d){
			var d = d || new Date();
			var day = d.getDay();
			var d1,d2;
			switch (day){
				case 0: //��
					d1 = getDateStr(d,+1);
					d2 = getDateStr(d,+7);
					break;
				case 1: //һ
					d1 = getDateStr(d,0);
					d2 = getDateStr(d,+6);
					break;
				case 2: //��
					d1 = getDateStr(d,-1);
					d2 = getDateStr(d,+5);
					break;
				case 3: //��
					d1 = getDateStr(d,-2);
					d2 = getDateStr(d,+4);
					break;
				case 4: //��
					d1 = getDateStr(d,-3);
					d2 = getDateStr(d,+3);
					break;
				case 5: //��
					d1 = getDateStr(d,-4);
					d2 = getDateStr(d,+2);
					break;
				case 6: //��
					d1 = getDateStr(d,-5);
					d2 = getDateStr(d,+1);
					break;
			}
			if(d1 && d2 ){$("#freeHerosPeriod").html(d1+"-"+d2)}
		}
		// �õ�ǰ������ʱ�����ó�����1 - ������
		getServerTime(freeHeroDayFill);
	};

	util.setKV = function(){
		var $wrapper = $(".wrapper");
		if(!$wrapper[0]){return}
		$.getScript("//game.qq.com/time/qqadv/Info_new_15191.js",function(){
			var kvPos = "pos16040";
			if(!oDaTaNew15191 || !oDaTaNew15191[kvPos]) return
				var kvImg = "//game.gtimg.cn/upload/adw/" + oDaTaNew15191[kvPos][2],
					kvLink = oDaTaNew15191[kvPos][1];
				$(".wrapper").css("background-image",'url(' + kvImg + ')');
				$("#kvLink").attr("url",kvLink);
				// console.log($(".wrapper").css("background-image"))
		})
	};

	util.setKVLink = function(){
		function setLink(){
			var link = $(".kv-bg .kv_link").attr("href");
			if(link){
				$("#header .kv-link").attr("href",link)
			}else{
				$("#header .kv-link").hide();
			}
		}
		setTimeout(setLink,500);
	};

	util.addFooterHTML = function(){
		var footerHTML = '';
		footerHTML +='<div class="footer-wrap">';
		footerHTML +='  <div class="footer bc">';
		footerHTML +='    <div class="foot-t clearfix">';
		footerHTML +='      <div class="foot-logo fl clearfix">';
		footerHTML +='        <a href="//ieg.tencent.com/" target="_blank" class="logo1 spr fl ht">��Ѷ��������</a>';
		footerHTML +='        <a href="//timi.qq.com/" target="_blank" class="logo2 spr fl ht">timi</a>';
		footerHTML +='      </div>';
		footerHTML +='      <div class="fl media-pic">';
		footerHTML +='        <a href="http://www.youxibao.com/wzlm/?ADTAG=main.coop.img1" target="_blank" class="m1"></a>';
		footerHTML +='        <a href="http://pvp.uuu9.com/?ADTAG=main.coop.img2" target="_blank" class="m2"></a>';
		footerHTML +='        <a href="http://lh.mofang.com/?ADTAG=main.coop.img3" target="_blank" class="m3"></a>';
		footerHTML +='        <a href="http://www.youxiduo.com/game/121033/?ADTAG=main.coop.img4" target="_blank" class="m4"></a>';
		footerHTML +='        <a href="http://www.18183.com/yxzjol/?ADTAG=main.coop.img5" target="_blank" class="m5"></a>';
		footerHTML +='        <a href="http://news.17173.com/z/pvp?ADTAG=main.coop.img6" target="_blank" class="m6"></a>';
		footerHTML +='      </div>   ';
		footerHTML +='      <div id="media" class="foot-media pr fr" onclick="PTTSendClick(\'footer\',\'media\',\'����ý��\');">';
		footerHTML +='        <h3 class="media-tit">����ý��</h3>';
		footerHTML +='        <div class="arrow-ico-btn pa"><span class="arrow-ico db spr"></span></div>';
		footerHTML +='			<ul style="display: none;" id="mediaCon" class="media-list pa">';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201703/559618.shtml">ȫ��羺��</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490079.shtml">52pk</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490076.shtml">�ξ�</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490074.shtml">ħ����</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490073.shtml">��Ϸ��</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490072.shtml">17173</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490071.shtml">18183</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/490070.shtml">������</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485141.shtml">�ڴ���ʿ</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485140.shtml">���α�</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485139.shtml">������</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485138.shtml">��Ȥ��</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485137.shtml">����</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485136.shtml">�����ʿ</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485135.shtml">178</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485134.shtml">����</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485133.shtml">����è</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485132.shtml">�����ǿ�</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485131.shtml">����</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485130.shtml">������</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485129.shtml">15W</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/485128.shtml">��Ϸ��</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/484756.shtml">4399</a></li>';
		footerHTML +='				<li><a target="_blank" href="/webplat/info/news_version3/15592/24091/25063/m11740/201607/484754.shtml">��Ϸ԰</a></li>';
		footerHTML +='			</ul>';
		footerHTML +='      </div>';
		footerHTML +='    </div>';
		footerHTML +='    <div class="clearfix">';
		footerHTML +='      <div class="foot-tips fl">';
		footerHTML +='        <p class="fb">��ܰ��ʾ������Ϸ�ʺ�16��(��)�����������</p>';
		footerHTML +='        <p class="f12"><em>���Ʋ�����Ϸ</em><em>�ܾ�������Ϸ</em><em>ע�����ұ���</em><em>������ƭ�ϵ�</em><em>�ʶ���Ϸ����</em><em>������Ϸ����</em><em>������ʱ��</em><em>���ܽ�������</em></p>';
		footerHTML +='        <p class="intro">��������ҫ��ȫ���������·����ڼܿ����硰���ߴ�½���С������������¼���Ϊ����������������ʷ������ۿ����߹��¶������ʷ���������Ȥ�����������ʷ���ء�</p>';
		footerHTML +='      </div>';
		footerHTML +='      <div class="foot-b f12 tr">';
		footerHTML +='          <p><a target="_blank" href="http://ieg.tencent.com">��Ѷ��������</a> | <a target="_blank" href="http://game.qq.com/contract.shtml">��������</a> | <a target="_blank" href="http://adver.qq.com/">������</a> | <a target="_blank" href="http://game.qq.com/hr/">��Ѷ��Ϸ��Ƹ</a> | <a target="_blank" href="http://service.qq.com/">��Ѷ��Ϸ�ͷ�</a> | <a target="_blank" href="http://game.qq.com/gnav">��Ϸ��ͼ</a> | <a target="_blank" href="http://tgact.qq.com/">��Ϸ�</a> | <a target="_blank" href="http://game.qq.com/brand/business.htm">�������</a> | <a target="_blank" href="http://www.qq.com/map/">��վ����</a></p>';
		footerHTML +='          <p class="foot-txt"><em class="fl">COPYRIGHT &copy; 1998 &ndash; 2017 TENCENT. ALL RIGHTS RESERVED.</em><a target="_blank" href="http://www.tencent.com/law/mo_law.shtml?/law/copyright.htm" class="fr">��Ѷ��˾ ��Ȩ����</a></p>';
		footerHTML +='          <p class="cb"><a target="_blank" href=" http://www.qq.com/culture.shtml">������[2017]6138-1456�� &amp; ISBN 978-7-7979-8408-9</a> | <a target="_blank" href="http://game.qq.com/culture2.htm">�³���֤��������010��</a> | �����α���[2016]M-CSG 0059</p>';
		footerHTML +='          <p class="cb">��׼�ĺţ��¹����[2017] 6712�� | ȫ���Ļ��г�ͳһ�ٱ��绰��12318</p>';
		footerHTML +='      </div>';
		footerHTML +='    </div>';
		footerHTML +='  </div>';
		footerHTML +=' </div>';
		$("body").append(footerHTML);
		
	};
	util.footerFunc = function(){
		$("#media").hover(function(){$("#mediaCon").show();},function(){$("#mediaCon").hide();})
	};

	init = function(){
		function n(){
			util.addHeaderHTML();
			util.headerFunc();
			util.addFooterHTML();
			util.footerFunc();
			// util.setKV();
		}
		function nJS(){
			fn.jsLoader("//pvp.qq.com/web201605/js/logic.js",function(){
				n()
			})
		}
		var libFile = (window.milo) ? "" : "//game.gtimg.cn/images/js/milo/milo-min.js"
		libFile ? fn.jsLoader(libFile,nJS()) : nJS();
	};

	return{
		init : init
	}
})()
pvpHeader.init();