if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'group-randomizer'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'group-randomizer'.");
}this['group-randomizer'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var throwCCE = Kotlin.throwCCE;
  var toMutableList = Kotlin.kotlin.sequences.toMutableList_veqyi0$;
  var equals = Kotlin.equals;
  var toMutableList_0 = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var sortedWith = Kotlin.kotlin.sequences.sortedWith_vjgqpk$;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Comparator = Kotlin.kotlin.Comparator;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var mapNotNull = Kotlin.kotlin.sequences.mapNotNull_qpz9h9$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Unit = Kotlin.kotlin.Unit;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var sortedWith_0 = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var A_init = $module$kotlinx_html_js.kotlinx.html.A;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var HTMLButtonElement_0 = HTMLButtonElement;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  ApplicationSettings.prototype = Object.create(AbstractApplicationSettings.prototype);
  ApplicationSettings.prototype.constructor = ApplicationSettings;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ApplicationSettings() {
    ApplicationSettings_instance = this;
    AbstractApplicationSettings.call(this);
    this.KEY_LAST_VERSION_0 = 'user.lastVersion';
    this.KEY_GROUPS_0 = 'groups';
    this.VAL_VERSION_0 = 1;
  }
  ApplicationSettings.prototype.isNewUser = function () {
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = this.get_0(this.KEY_LAST_VERSION_0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0) < 1;
  };
  ApplicationSettings.prototype.storeUserLastInfo = function () {
    this.set_0(this.KEY_LAST_VERSION_0, 1);
  };
  ApplicationSettings.prototype.getGroups = function () {
    return this.getMutableGroups_0();
  };
  function ApplicationSettings$getMutableGroups$lambda(closure$groupsJson) {
    return function (it) {
      return closure$groupsJson.v[it];
    };
  }
  function ApplicationSettings$getMutableGroups$lambda_0(this$ApplicationSettings) {
    return function (it) {
      var tmp$;
      var group = new Group(typeof (tmp$ = it.name) === 'string' ? tmp$ : throwCCE());
      group.members.addAll_brywnq$(this$ApplicationSettings.getMembers_0(it));
      return group;
    };
  }
  function ApplicationSettings$getMutableGroups$lambda_1(it) {
    return it.name.toLowerCase();
  }
  ApplicationSettings.prototype.getMutableGroups_0 = function () {
    var tmp$;
    var groupsJson = {v: JSON.parse((tmp$ = this.get_0('groups')) != null ? tmp$ : '[]')};
    var groupCount = groupsJson.v.length;
    return toMutableList(sortedWith(map(map(asSequence(until(0, groupCount)), ApplicationSettings$getMutableGroups$lambda(groupsJson)), ApplicationSettings$getMutableGroups$lambda_0(this)), new Comparator$ObjectLiteral(compareBy$lambda(ApplicationSettings$getMutableGroups$lambda_1))));
  };
  ApplicationSettings.prototype.setMutableGroups_0 = function (groups) {
    this.set_1('groups', JSON.stringify(groups));
  };
  function ApplicationSettings$getMembers$lambda(closure$groupJson) {
    return function (it) {
      return closure$groupJson.members[it];
    };
  }
  function ApplicationSettings$getMembers$lambda_0(it) {
    var tmp$, tmp$_0;
    return new Member(typeof (tmp$ = it.name) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = it.active) === 'boolean' ? tmp$_0 : throwCCE());
  }
  ApplicationSettings.prototype.getMembers_0 = function (groupJson) {
    var tmp$;
    if (groupJson.members != undefined) {
      return toMutableList(map(map(asSequence(until(0, (tmp$ = groupJson.members.length) != null ? tmp$ : 0)), ApplicationSettings$getMembers$lambda(groupJson)), ApplicationSettings$getMembers$lambda_0));
    } else {
      return ArrayList_init();
    }
  };
  ApplicationSettings.prototype.setGroup_bzgne3$ = function (group) {
    var $receiver = this.getMutableGroups_0();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(element.name, group.name))
        destination.add_11rb$(element);
    }
    var newGroups = toMutableList_0(destination);
    newGroups.add_11rb$(group);
    this.setMutableGroups_0(newGroups);
  };
  ApplicationSettings.prototype.getGroup_61zpoe$ = function (name) {
    var $receiver = this.getGroups();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  ApplicationSettings.prototype.deleteGroup_61zpoe$ = function (name) {
    var $receiver = this.getMutableGroups_0();
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(name, element.name))
        destination.add_11rb$(element);
    }
    this.setMutableGroups_0(destination);
  };
  ApplicationSettings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationSettings',
    interfaces: [AbstractApplicationSettings]
  };
  var ApplicationSettings_instance = null;
  function ApplicationSettings_getInstance() {
    if (ApplicationSettings_instance === null) {
      new ApplicationSettings();
    }return ApplicationSettings_instance;
  }
  function Group(name, members) {
    if (members === void 0) {
      members = ArrayList_init();
    }this.name = name;
    this.members = members;
  }
  Group.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Group',
    interfaces: []
  };
  Group.prototype.component1 = function () {
    return this.name;
  };
  Group.prototype.component2 = function () {
    return this.members;
  };
  Group.prototype.copy_yjeta8$ = function (name, members) {
    return new Group(name === void 0 ? this.name : name, members === void 0 ? this.members : members);
  };
  Group.prototype.toString = function () {
    return 'Group(name=' + Kotlin.toString(this.name) + (', members=' + Kotlin.toString(this.members)) + ')';
  };
  Group.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.members) | 0;
    return result;
  };
  Group.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.members, other.members)))));
  };
  function Member(name, active) {
    if (active === void 0)
      active = true;
    this.name = name;
    this.active = active;
  }
  Member.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Member',
    interfaces: []
  };
  Member.prototype.component1 = function () {
    return this.name;
  };
  Member.prototype.component2 = function () {
    return this.active;
  };
  Member.prototype.copy_ivxn3r$ = function (name, active) {
    return new Member(name === void 0 ? this.name : name, active === void 0 ? this.active : active);
  };
  Member.prototype.toString = function () {
    return 'Member(name=' + Kotlin.toString(this.name) + (', active=' + Kotlin.toString(this.active)) + ')';
  };
  Member.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    return result;
  };
  Member.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.active, other.active)))));
  };
  function main() {
    try {
      initGroupRandomizer();
    } catch (exception) {
      if (Kotlin.isType(exception, Exception)) {
        console.error(exception);
        window.alert('Unable to initialize GroupRandomizer: ' + toString(exception.message));
      } else
        throw exception;
    }
  }
  function initGroupRandomizer() {
    new UiController();
    ApplicationSettings_getInstance().storeUserLastInfo();
  }
  function AbstractApplicationSettings() {
    AbstractApplicationSettings$Companion_getInstance();
    this.intermediate_0 = LinkedHashMap_init();
    if (!this.hasUserConsent) {
      this.loadIntermediateFromLocalStorage_0();
      localStorage.clear();
    }}
  function AbstractApplicationSettings$Companion() {
    AbstractApplicationSettings$Companion_instance = this;
    this.KEY_CONSENT_0 = 'consent';
  }
  AbstractApplicationSettings$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbstractApplicationSettings$Companion_instance = null;
  function AbstractApplicationSettings$Companion_getInstance() {
    if (AbstractApplicationSettings$Companion_instance === null) {
      new AbstractApplicationSettings$Companion();
    }return AbstractApplicationSettings$Companion_instance;
  }
  AbstractApplicationSettings.prototype.persistIntermediate_0 = function () {
    var tmp$;
    tmp$ = this.intermediate_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.set_1(element.key, element.value);
    }
    this.intermediate_0.clear();
  };
  AbstractApplicationSettings.prototype.loadIntermediateFromLocalStorage_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = localStorage.length;
    for (var i = 0; i < tmp$; i++) {
      if ((tmp$_0 = localStorage.key(i)) != null) {
        var tmp$_1;
        if ((tmp$_1 = localStorage.getItem(tmp$_0)) != null) {
          this.intermediate_0.put_xwzc9p$(tmp$_0, tmp$_1);
        }}}
  };
  AbstractApplicationSettings.prototype.get_0 = function (key) {
    var tmp$;
    return (tmp$ = this.intermediate_0.get_11rb$(key)) != null ? tmp$ : localStorage.getItem(key);
  };
  AbstractApplicationSettings.prototype.set_1 = function (key, value) {
    if (this.hasUserConsent) {
      localStorage.setItem(key, value);
    } else {
      this.intermediate_0.put_xwzc9p$(key, value);
    }
  };
  function AbstractApplicationSettings$listKeys$lambda(it) {
    return localStorage.key(it);
  }
  AbstractApplicationSettings.prototype.listKeys_0 = function () {
    if (this.hasUserConsent) {
      return mapNotNull(asSequence(downTo(localStorage.length, 0)), AbstractApplicationSettings$listKeys$lambda);
    } else {
      return asSequence(this.intermediate_0.keys);
    }
  };
  AbstractApplicationSettings.prototype.set_0 = function (key, value) {
    this.set_1(key, value.toString());
  };
  AbstractApplicationSettings.prototype.set_2 = function (key, value) {
    this.set_1(key, value.toString());
  };
  AbstractApplicationSettings.prototype.set_3 = function (key, value) {
    this.set_1(key, this.toJSON_0(value));
  };
  AbstractApplicationSettings.prototype.getAny_0 = function (key) {
    var tmp$;
    return (tmp$ = this.get_0(key)) != null ? this.toAny_0(tmp$) : null;
  };
  AbstractApplicationSettings.prototype.toJSON_0 = function ($receiver) {
    return JSON.stringify($receiver);
  };
  AbstractApplicationSettings.prototype.toAny_0 = function ($receiver) {
    return JSON.parse($receiver);
  };
  Object.defineProperty(AbstractApplicationSettings.prototype, 'hasUserConsent', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.get_0(AbstractApplicationSettings$Companion_getInstance().KEY_CONSENT_0)) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
    },
    set: function (value) {
      this.set_2(AbstractApplicationSettings$Companion_getInstance().KEY_CONSENT_0, value);
      if (value) {
        this.persistIntermediate_0();
      } else {
        this.loadIntermediateFromLocalStorage_0();
      }
    }
  });
  AbstractApplicationSettings.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AbstractApplicationSettings',
    interfaces: []
  };
  function CookieBanner() {
    CookieBanner_instance = this;
    this.ID_DIV_COOKIE_0 = 'ck_container_cookie';
    this.ID_BTN_ACCEPT_0 = 'ck_btn_accept';
    this.ID_BTN_REJECT_0 = 'ck_btn_reject';
    var id = this.ID_DIV_COOKIE_0;
    var getElementById_359kph$result;
    var tmp$;
    try {
      getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
      } else
        throw e;
    }
    this.ctnCookie_0 = getElementById_359kph$result;
  }
  function CookieBanner$initialize$lambda(this$CookieBanner) {
    return function (it) {
      ApplicationSettings_getInstance().hasUserConsent = true;
      this$CookieBanner.hideBanner_0();
      return Unit;
    };
  }
  function CookieBanner$initialize$lambda_0(this$CookieBanner) {
    return function (it) {
      this$CookieBanner.hideBanner_0();
      return Unit;
    };
  }
  CookieBanner.prototype.initialize = function () {
    if (ApplicationSettings_getInstance().hasUserConsent) {
      this.hideBanner_0();
    } else {
      var id = this.ID_BTN_ACCEPT_0;
      var getElementById_359kph$result;
      var tmp$;
      try {
        getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLButtonElement) ? tmp$ : throwCCE();
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
        } else
          throw e;
      }
      var btnAccept = getElementById_359kph$result;
      var id_0 = this.ID_BTN_REJECT_0;
      var getElementById_359kph$result_0;
      var tmp$_0;
      try {
        getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLButtonElement) ? tmp$_0 : throwCCE();
      } catch (e_0) {
        if (Kotlin.isType(e_0, ClassCastException)) {
          throw new RuntimeException_init("Unable to find element with id '" + id_0 + "'.", e_0);
        } else
          throw e_0;
      }
      var btnReject = getElementById_359kph$result_0;
      btnAccept.onclick = CookieBanner$initialize$lambda(this);
      btnReject.onclick = CookieBanner$initialize$lambda_0(this);
    }
  };
  CookieBanner.prototype.hideBanner_0 = function () {
    jQuery(this.ctnCookie_0).hide();
  };
  CookieBanner.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CookieBanner',
    interfaces: []
  };
  var CookieBanner_instance = null;
  function CookieBanner_getInstance() {
    if (CookieBanner_instance === null) {
      new CookieBanner();
    }return CookieBanner_instance;
  }
  function HtmlHelper() {
    HtmlHelper_instance = this;
  }
  HtmlHelper.prototype.getElementById_359kph$ = defineInlineFunction('group-randomizer.org.olafneumann.grouprandom.browser.HtmlHelper.getElementById_359kph$', wrapFunction(function () {
    var throwCCE = Kotlin.throwCCE;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException;
    var ClassCastException = Kotlin.kotlin.ClassCastException;
    return function (T_0, isT, id) {
      var tmp$;
      try {
        return isT(tmp$ = document.getElementById(id)) ? tmp$ : throwCCE();
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
        } else
          throw e;
      }
    };
  }));
  HtmlHelper.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlHelper',
    interfaces: []
  };
  var HtmlHelper_instance = null;
  function HtmlHelper_getInstance() {
    if (HtmlHelper_instance === null) {
      new HtmlHelper();
    }return HtmlHelper_instance;
  }
  function jQuery(element) {
    return $('#' + element.id);
  }
  function DisplayContract() {
  }
  function DisplayContract$View() {
  }
  DisplayContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function DisplayContract$Controller() {
  }
  DisplayContract$Controller.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Controller',
    interfaces: []
  };
  DisplayContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DisplayContract',
    interfaces: []
  };
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function visit$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function a$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function span$lambda($receiver) {
    return Unit;
  }
  function visit$lambda_1(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda($receiver) {
    return Unit;
  }
  function HtmlView(presenter) {
    HtmlView$Companion_getInstance();
    this.presenter_0 = presenter;
    var id = HtmlView$Companion_getInstance().ID_LIST_EXISTING_GROUPS;
    var getElementById_359kph$result;
    var tmp$;
    try {
      getElementById_359kph$result = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
    } catch (e) {
      if (Kotlin.isType(e, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id + "'.", e);
      } else
        throw e;
    }
    this.divListExistingGroups_0 = getElementById_359kph$result;
    var id_0 = HtmlView$Companion_getInstance().ID_INPUT_NEW_GROUP_NAME;
    var getElementById_359kph$result_0;
    var tmp$_0;
    try {
      getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLInputElement) ? tmp$_0 : throwCCE();
    } catch (e_0) {
      if (Kotlin.isType(e_0, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_0 + "'.", e_0);
      } else
        throw e_0;
    }
    this.inputNewGroupName_0 = getElementById_359kph$result_0;
    var id_1 = HtmlView$Companion_getInstance().ID_BUTTON_NEW_GROUP;
    var getElementById_359kph$result_1;
    var tmp$_1;
    try {
      getElementById_359kph$result_1 = Kotlin.isType(tmp$_1 = document.getElementById(id_1), HTMLButtonElement) ? tmp$_1 : throwCCE();
    } catch (e_1) {
      if (Kotlin.isType(e_1, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_1 + "'.", e_1);
      } else
        throw e_1;
    }
    this.btnCreateNewGroup_0 = getElementById_359kph$result_1;
    var id_2 = HtmlView$Companion_getInstance().ID_LIST_EXISTING_MEMBERS;
    var getElementById_359kph$result_2;
    var tmp$_2;
    try {
      getElementById_359kph$result_2 = Kotlin.isType(tmp$_2 = document.getElementById(id_2), HTMLDivElement) ? tmp$_2 : throwCCE();
    } catch (e_2) {
      if (Kotlin.isType(e_2, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_2 + "'.", e_2);
      } else
        throw e_2;
    }
    this.divListGroupMembers_0 = getElementById_359kph$result_2;
    var id_3 = HtmlView$Companion_getInstance().ID_INPUT_NEW_MEMBER_NAME;
    var getElementById_359kph$result_3;
    var tmp$_3;
    try {
      getElementById_359kph$result_3 = Kotlin.isType(tmp$_3 = document.getElementById(id_3), HTMLInputElement) ? tmp$_3 : throwCCE();
    } catch (e_3) {
      if (Kotlin.isType(e_3, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_3 + "'.", e_3);
      } else
        throw e_3;
    }
    this.inputNewGroupMember_0 = getElementById_359kph$result_3;
    var id_4 = HtmlView$Companion_getInstance().ID_BUTTON_ADD_GROUP_MEMBER;
    var getElementById_359kph$result_4;
    var tmp$_4;
    try {
      getElementById_359kph$result_4 = Kotlin.isType(tmp$_4 = document.getElementById(id_4), HTMLButtonElement) ? tmp$_4 : throwCCE();
    } catch (e_4) {
      if (Kotlin.isType(e_4, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_4 + "'.", e_4);
      } else
        throw e_4;
    }
    this.btnAddGroupMember_0 = getElementById_359kph$result_4;
    var stopPropagation = HtmlView_init$lambda;
    var createGroupCallback = HtmlView_init$lambda_0(this);
    var addMemberToGroupCallback = HtmlView_init$lambda_1(this);
    this.btnCreateNewGroup_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, createGroupCallback);
    this.inputNewGroupName_0.addEventListener(HtmlView$Companion_getInstance().EVENT_KEYUP, stopPropagation);
    this.btnAddGroupMember_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, addMemberToGroupCallback);
    this.inputNewGroupMember_0.addEventListener(HtmlView$Companion_getInstance().EVENT_KEYUP, stopPropagation);
    this.groupElements_0 = emptyMap();
    this.memberElements_0 = emptyMap();
  }
  Object.defineProperty(HtmlView.prototype, 'newGroupName', {
    get: function () {
      return this.inputNewGroupName_0.value;
    },
    set: function (value) {
      this.inputNewGroupName_0.value = value;
    }
  });
  Object.defineProperty(HtmlView.prototype, 'newMemberName', {
    get: function () {
      return this.inputNewGroupMember_0.value;
    },
    set: function (value) {
      this.inputNewGroupMember_0.value = value;
    }
  });
  function HtmlView$showGroups$lambda(it) {
    return !it.classList.contains('gr-allways-there');
  }
  HtmlView.prototype.showGroups_4cqr16$ = function (groups) {
    this.removeChildren_0(this.divListExistingGroups_0, HtmlView$showGroups$lambda);
    var $receiver = reversed(groups);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.createGroupItem_0(item)));
    }
    this.groupElements_0 = toMap(destination);
    var tmp$_0;
    tmp$_0 = this.groupElements_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.divListExistingGroups_0.prepend(element.value);
    }
  };
  HtmlView.prototype.selectGroup_gdrvas$ = function (group) {
    var tmp$;
    tmp$ = this.groupElements_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value.classList.toggle('active', group != null && equals(element.key, group));
    }
  };
  function HtmlView$showMembers$lambda(it) {
    return !it.classList.contains('gr-allways-there');
  }
  function HtmlView$showMembers$lambda_0(it) {
    return it.name;
  }
  HtmlView.prototype.showMembers_hxfhdp$ = function (members) {
    this.removeChildren_0(this.divListGroupMembers_0, HtmlView$showMembers$lambda);
    var $receiver = reversed(sortedWith_0(members, new Comparator$ObjectLiteral_0(compareBy$lambda_0(HtmlView$showMembers$lambda_0))));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.createMemberItem_0(item)));
    }
    this.memberElements_0 = toMap(destination);
    var tmp$_0;
    tmp$_0 = this.memberElements_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.divListGroupMembers_0.prepend(element.value);
    }
  };
  HtmlView.prototype.removeChildren_0 = function ($receiver, filter) {
    var $receiver_0 = downTo($receiver.childElementCount, 0);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = $receiver.children[element]) != null) {
        destination.add_11rb$(tmp$_0);
      }}
    var destination_0 = ArrayList_init();
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      if (filter(element_0))
        destination_0.add_11rb$(element_0);
    }
    var tmp$_2;
    tmp$_2 = destination_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      $receiver.removeChild(element_1);
    }
  };
  function HtmlView$createGroupItem$lambda$lambda(closure$group, this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.group = closure$group;
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda$lambda$lambda$lambda(closure$group, this$HtmlView) {
    return function (event) {
      if (window.confirm("Do you really want to delete group '" + closure$group.name + "'?")) {
        this$HtmlView.presenter_0.removeGroup_bzgne3$(closure$group);
      }event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda$lambda$lambda(closure$group, this$HtmlView) {
    return function ($receiver) {
      set_title($receiver, "Delete group '" + closure$group.name + "'.");
      $receiver.unaryPlus_pdl1vz$('\uD83D\uDDD1');
      set_onClickFunction($receiver, HtmlView$createGroupItem$lambda$lambda$lambda$lambda(closure$group, this$HtmlView));
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda$lambda$lambda_0(closure$group) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$group.members.size.toString());
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda$lambda_0(closure$group, this$HtmlView) {
    return function ($receiver) {
      var classes = 'gr-action-link ml-1';
      var block = HtmlView$createGroupItem$lambda$lambda$lambda(closure$group, this$HtmlView);
      visitTag(new A_init(attributesMapOf(['href', null, 'target', null, 'class', classes]), $receiver.consumer), visit$lambda(block));
      var classes_0 = 'badge badge-primary badge-pill ml-1';
      var block_0 = HtmlView$createGroupItem$lambda$lambda$lambda_0(closure$group);
      visitTag(new SPAN_init(attributesMapOf_0('class', classes_0), $receiver.consumer), visit$lambda_0(block_0));
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda(closure$group, this$HtmlView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$group.name);
      set_onClickFunction($receiver, HtmlView$createGroupItem$lambda$lambda(closure$group, this$HtmlView));
      var block = HtmlView$createGroupItem$lambda$lambda_0(closure$group, this$HtmlView);
      visitTag(new DIV_init(attributesMapOf_0('class', 'ml-1'), $receiver.consumer), visit$lambda_1(block));
      return Unit;
    };
  }
  HtmlView.prototype.createGroupItem_0 = function (group) {
    var $receiver = get_create(document);
    var type = ButtonType.button;
    var classes = 'list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container';
    var tmp$;
    return Kotlin.isType(tmp$ = visitTagAndFinalize(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver), $receiver, visitAndFinalize$lambda(HtmlView$createGroupItem$lambda(group, this))), HTMLButtonElement_0) ? tmp$ : throwCCE();
  };
  function HtmlView$createMemberItem$lambda$lambda(this$HtmlView, closure$member) {
    return function (it) {
      this$HtmlView.presenter_0.toggleMemberActivation_j0ulny$(closure$member);
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda$lambda(closure$member, this$HtmlView) {
    return function (event) {
      if (window.confirm("Do you really want to remove member '" + closure$member.name + "'?")) {
        this$HtmlView.presenter_0.removeMember_j0ulny$(closure$member);
      }event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda(closure$member, this$HtmlView) {
    return function ($receiver) {
      set_title($receiver, "Remove member '" + closure$member.name + "'.");
      $receiver.unaryPlus_pdl1vz$('\uD83D\uDDD1');
      set_onClickFunction($receiver, HtmlView$createMemberItem$lambda$lambda$lambda$lambda(closure$member, this$HtmlView));
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda_0(closure$member, this$HtmlView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$HtmlView.getIconText_0(closure$member));
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda_0(closure$member, this$HtmlView) {
    return function ($receiver) {
      var classes = 'gr-action-link ml-1';
      var block = HtmlView$createMemberItem$lambda$lambda$lambda(closure$member, this$HtmlView);
      visitTag(new A_init(attributesMapOf(['href', null, 'target', null, 'class', classes]), $receiver.consumer), visit$lambda(block));
      var classes_0 = 'badge badge-pill ml-1 ' + this$HtmlView.getBadgeClass_0(closure$member);
      var block_0 = HtmlView$createMemberItem$lambda$lambda$lambda_0(closure$member, this$HtmlView);
      visitTag(new SPAN_init(attributesMapOf_0('class', classes_0), $receiver.consumer), visit$lambda_0(block_0));
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda(closure$member, this$HtmlView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$member.name);
      set_onClickFunction($receiver, HtmlView$createMemberItem$lambda$lambda(this$HtmlView, closure$member));
      var block = HtmlView$createMemberItem$lambda$lambda_0(closure$member, this$HtmlView);
      visitTag(new DIV_init(attributesMapOf_0('class', 'ml-1'), $receiver.consumer), visit$lambda_1(block));
      return Unit;
    };
  }
  HtmlView.prototype.createMemberItem_0 = function (member) {
    var $receiver = get_create(document);
    var type = ButtonType.button;
    var classes = 'list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container';
    var tmp$;
    return Kotlin.isType(tmp$ = visitTagAndFinalize(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver), $receiver, visitAndFinalize$lambda(HtmlView$createMemberItem$lambda(member, this))), HTMLButtonElement_0) ? tmp$ : throwCCE();
  };
  HtmlView.prototype.getBadgeClass_0 = function ($receiver) {
    return $receiver.active ? 'badge-success' : 'badge-danger';
  };
  HtmlView.prototype.getIconText_0 = function ($receiver) {
    return $receiver.active ? '\u2713' : '\u2715';
  };
  function HtmlView$Companion() {
    HtmlView$Companion_instance = this;
    this.CLASS_MATCH_ROW = 'gr-match-row';
    this.CLASS_MATCH_ITEM = 'gr-match-item';
    this.CLASS_ITEM_SELECTED = 'gr-item-selected';
    this.CLASS_CHAR_SELECTED = 'gr-char-selected';
    this.CLASS_ITEM_NOT_AVAILABLE = 'gr-item-not-available';
    this.EVENT_CLICK = 'click';
    this.EVENT_INPUT = 'input';
    this.EVENT_KEYUP = 'keyup';
    this.EVENT_MOUSE_ENTER = 'mouseenter';
    this.EVENT_MOUSE_LEAVE = 'mouseleave';
    this.ID_LIST_EXISTING_GROUPS = 'gr_existing_groups';
    this.ID_INPUT_NEW_GROUP_NAME = 'gr_new_group_name';
    this.ID_BUTTON_NEW_GROUP = 'gr_create_new_group';
    this.ID_LIST_EXISTING_MEMBERS = 'gr_existing_members';
    this.ID_INPUT_NEW_MEMBER_NAME = 'gr_new_member_name';
    this.ID_BUTTON_ADD_GROUP_MEMBER = 'gr_add_group_member';
    this.ID_DIV_RESULT_TEXT = 'gr_result_text';
  }
  function HtmlView$Companion$toKeyUpOnEnter$lambda(this$toKeyUpOnEnter) {
    return function (event) {
      if (Kotlin.isType(event, KeyboardEvent) && event.keyCode === 13) {
        this$toKeyUpOnEnter(event);
      }return Unit;
    };
  }
  HtmlView$Companion.prototype.toKeyUpOnEnter_0 = function ($receiver) {
    return HtmlView$Companion$toKeyUpOnEnter$lambda($receiver);
  };
  HtmlView$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var HtmlView$Companion_instance = null;
  function HtmlView$Companion_getInstance() {
    if (HtmlView$Companion_instance === null) {
      new HtmlView$Companion();
    }return HtmlView$Companion_instance;
  }
  function HtmlView_init$lambda(it) {
    it.stopPropagation();
    return Unit;
  }
  function HtmlView_init$lambda_0(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.createGroup_61zpoe$(this$HtmlView.newGroupName);
      return Unit;
    };
  }
  function HtmlView_init$lambda_1(this$HtmlView) {
    return function (it) {
      this$HtmlView.presenter_0.addMemberToGroup_61zpoe$(this$HtmlView.newMemberName);
      return Unit;
    };
  }
  HtmlView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlView',
    interfaces: [DisplayContract$View]
  };
  function UiController() {
    this.view_0 = new HtmlView(this);
    CookieBanner_getInstance().initialize();
    this.fillUi_0();
    this.selectedGroup_0 = null;
  }
  UiController.prototype.fillUi_0 = function () {
    var tmp$, tmp$_0;
    this.view_0.showGroups_4cqr16$(ApplicationSettings_getInstance().getGroups());
    this.view_0.showMembers_hxfhdp$((tmp$_0 = (tmp$ = this.group) != null ? tmp$.members : null) != null ? tmp$_0 : emptyList());
    this.view_0.selectGroup_gdrvas$(this.group);
  };
  UiController.prototype.createGroup_61zpoe$ = function (name) {
    var tmp$;
    if (isBlank(name)) {
      return null;
    }var validGroupName = this.toValidName_0(name);
    var group = (tmp$ = ApplicationSettings_getInstance().getGroup_61zpoe$(validGroupName)) != null ? tmp$ : new Group(validGroupName);
    ApplicationSettings_getInstance().setGroup_bzgne3$(group);
    this.fillUi_0();
    this.view_0.newGroupName = '';
    this.group = group;
    return group;
  };
  UiController.prototype.removeGroup_bzgne3$ = function (group) {
    ApplicationSettings_getInstance().deleteGroup_61zpoe$(group.name);
    if (equals(group, this.group)) {
      this.group = null;
    }this.fillUi_0();
  };
  Object.defineProperty(UiController.prototype, 'group', {
    get: function () {
      return this.selectedGroup_0;
    },
    set: function (value) {
      var tmp$;
      this.selectedGroup_0 = value;
      this.view_0.selectGroup_gdrvas$(value);
      this.view_0.showMembers_hxfhdp$((tmp$ = value != null ? value.members : null) != null ? tmp$ : emptyList());
    }
  });
  UiController.prototype.addMemberToGroup_61zpoe$ = function (name) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var validName = this.toValidName_0(name);
    var tmp$_4;
    if ((tmp$_0 = (tmp$ = this.group) != null ? tmp$.members : null) != null) {
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_5;
        tmp$_5 = tmp$_0.iterator();
        while (tmp$_5.hasNext()) {
          var element = tmp$_5.next();
          if (equals(element.name, validName)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_4 = firstOrNull$result;
    } else
      tmp$_4 = null;
    if (tmp$_4 == null) {
      (tmp$_2 = (tmp$_1 = this.group) != null ? tmp$_1.members : null) != null ? tmp$_2.add_11rb$(new Member(validName)) : null;
    }if ((tmp$_3 = this.group) != null) {
      ApplicationSettings_getInstance().setGroup_bzgne3$(tmp$_3);
    }this.view_0.newMemberName = '';
    this.fillUi_0();
  };
  function UiController$removeMember$lambda(closure$member) {
    return function (it) {
      return equals(it.name, closure$member.name);
    };
  }
  UiController.prototype.removeMember_j0ulny$ = function (member) {
    var tmp$, tmp$_0, tmp$_1;
    (tmp$_0 = (tmp$ = this.group) != null ? tmp$.members : null) != null ? removeAll(tmp$_0, UiController$removeMember$lambda(member)) : null;
    if ((tmp$_1 = this.group) != null) {
      ApplicationSettings_getInstance().setGroup_bzgne3$(tmp$_1);
    }this.fillUi_0();
  };
  UiController.prototype.toggleMemberActivation_j0ulny$ = function (member) {
    var tmp$;
    member.active = !member.active;
    if ((tmp$ = this.group) != null) {
      ApplicationSettings_getInstance().setGroup_bzgne3$(tmp$);
    }this.fillUi_0();
  };
  UiController.prototype.toValidName_0 = function ($receiver) {
    var $receiver_0 = Regex_init('\\s+').replace_x2uqeu$($receiver, ' ');
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = $receiver_0) ? tmp$ : throwCCE()).toString();
  };
  UiController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiController',
    interfaces: [DisplayContract$Controller]
  };
  var package$org = _.org || (_.org = {});
  var package$olafneumann = package$org.olafneumann || (package$org.olafneumann = {});
  var package$grouprandom = package$olafneumann.grouprandom || (package$olafneumann.grouprandom = {});
  Object.defineProperty(package$grouprandom, 'ApplicationSettings', {
    get: ApplicationSettings_getInstance
  });
  package$grouprandom.Group = Group;
  package$grouprandom.Member = Member;
  package$grouprandom.main = main;
  Object.defineProperty(AbstractApplicationSettings, 'Companion', {
    get: AbstractApplicationSettings$Companion_getInstance
  });
  var package$browser = package$grouprandom.browser || (package$grouprandom.browser = {});
  package$browser.AbstractApplicationSettings = AbstractApplicationSettings;
  $$importsForInline$$['group-randomizer'] = _;
  Object.defineProperty(package$browser, 'CookieBanner', {
    get: CookieBanner_getInstance
  });
  Object.defineProperty(package$browser, 'HtmlHelper', {
    get: HtmlHelper_getInstance
  });
  var package$regex = package$olafneumann.regex || (package$olafneumann.regex = {});
  var package$generator = package$regex.generator || (package$regex.generator = {});
  var package$js = package$generator.js || (package$generator.js = {});
  package$js.jQuery_lt8gi4$ = jQuery;
  DisplayContract.View = DisplayContract$View;
  DisplayContract.Controller = DisplayContract$Controller;
  var package$ui = package$grouprandom.ui || (package$grouprandom.ui = {});
  package$ui.DisplayContract = DisplayContract;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  Object.defineProperty(HtmlView, 'Companion', {
    get: HtmlView$Companion_getInstance
  });
  package$ui.HtmlView = HtmlView;
  package$ui.UiController = UiController;
  main();
  Kotlin.defineModule('group-randomizer', _);
  return _;
}(typeof this['group-randomizer'] === 'undefined' ? {} : this['group-randomizer'], kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=group-randomizer.js.map
