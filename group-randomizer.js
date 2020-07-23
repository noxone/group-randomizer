if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'group-randomizer'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'group-randomizer'.");
}this['group-randomizer'] = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var asSequence = Kotlin.kotlin.collections.asSequence_7wnvza$;
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toMutableList_0 = Kotlin.kotlin.sequences.toMutableList_veqyi0$;
  var equals = Kotlin.equals;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
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
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
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
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
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
  function ApplicationSettings$getMutableGroups$lambda(this$ApplicationSettings) {
    return function (it) {
      var tmp$;
      var group = new Group(typeof (tmp$ = it.name) === 'string' ? tmp$ : throwCCE());
      group.members.addAll_brywnq$(this$ApplicationSettings.getMembers_0(it));
      return group;
    };
  }
  function ApplicationSettings$getMutableGroups$lambda_0(it) {
    return it.name.toLowerCase();
  }
  ApplicationSettings.prototype.getMutableGroups_0 = function () {
    var tmp$;
    return toMutableList(sortedWith(this.readArrayToMutableList_0(JSON.parse((tmp$ = this.get_0('groups')) != null ? tmp$ : '[]'), ApplicationSettings$getMutableGroups$lambda(this)), new Comparator$ObjectLiteral(compareBy$lambda(ApplicationSettings$getMutableGroups$lambda_0))));
  };
  ApplicationSettings.prototype.setMutableGroups_0 = function (groups) {
    this.set_1('groups', JSON.stringify(groups));
  };
  function ApplicationSettings$getMembers$lambda(it) {
    var tmp$, tmp$_0;
    return new Member(typeof (tmp$ = it.name) === 'string' ? tmp$ : throwCCE(), typeof (tmp$_0 = it.active) === 'boolean' ? tmp$_0 : throwCCE());
  }
  ApplicationSettings.prototype.getMembers_0 = function (groupJson) {
    if (groupJson.members != undefined) {
      return this.readArrayToMutableList_0(groupJson.members, ApplicationSettings$getMembers$lambda);
    } else {
      return ArrayList_init();
    }
  };
  function ApplicationSettings$readArrayToMutableList$lambda(closure$array) {
    return function (it) {
      return closure$array[it];
    };
  }
  function ApplicationSettings$readArrayToMutableList$lambda_0(closure$handler) {
    return function (it) {
      return closure$handler(it);
    };
  }
  ApplicationSettings.prototype.readArrayToMutableList_0 = function (array, handler) {
    var tmp$;
    return toMutableList_0(map(map(asSequence(until(0, (tmp$ = array.length) != null ? tmp$ : 0)), ApplicationSettings$readArrayToMutableList$lambda(array)), ApplicationSettings$readArrayToMutableList$lambda_0(handler)));
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
    var newGroups = toMutableList(destination);
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
  function ApplicationSettings$readConfigFromArray$lambda(it) {
    return it.toString();
  }
  ApplicationSettings.prototype.readConfigFromArray_0 = function (key, defaultJson) {
    if (defaultJson === void 0)
      defaultJson = '[]';
    var tmp$;
    return this.readArrayToMutableList_0(JSON.parse((tmp$ = this.get_0(key)) != null ? tmp$ : defaultJson), ApplicationSettings$readConfigFromArray$lambda);
  };
  Object.defineProperty(ApplicationSettings.prototype, 'currentPrefix', {
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0('current.prefix')) != null ? tmp$ : '';
    },
    set: function (value) {
      this.set_1('current.prefix', value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentSeparator', {
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0('current.separator')) != null ? tmp$ : ', ';
    },
    set: function (value) {
      this.set_1('current.separator', value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPostfix', {
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0('current.postfix')) != null ? tmp$ : '';
    },
    set: function (value) {
      this.set_1('current.postfix', value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'prefixes', {
    get: function () {
      return this.readConfigFromArray_0('list.prefixes', '["\xA0","Today\'s order: "]');
    },
    set: function (value) {
      this.set_1('list.prefixes', JSON.stringify(value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'separators', {
    get: function () {
      return this.readConfigFromArray_0('list.separators', '[", "," : "]');
    },
    set: function (value) {
      this.set_1('list.separators', JSON.stringify(value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'postfixes', {
    get: function () {
      return this.readConfigFromArray_0('list.postfixes', '["","."]');
    },
    set: function (value) {
      this.set_1('list.postfixes', JSON.stringify(value));
    }
  });
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
  function visit$lambda_2(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function button$lambda_0($receiver) {
    return Unit;
  }
  function visitAndFinalize$lambda_0(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  function div$lambda_0($receiver) {
    return Unit;
  }
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
  function HtmlView(controller) {
    HtmlView$Companion_getInstance();
    this.controller_0 = controller;
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
    this.divListGroups_0 = getElementById_359kph$result;
    var id_0 = HtmlView$Companion_getInstance().ID_FORM_ADD_GROUP;
    var getElementById_359kph$result_0;
    var tmp$_0;
    try {
      getElementById_359kph$result_0 = Kotlin.isType(tmp$_0 = document.getElementById(id_0), HTMLFormElement) ? tmp$_0 : throwCCE();
    } catch (e_0) {
      if (Kotlin.isType(e_0, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_0 + "'.", e_0);
      } else
        throw e_0;
    }
    this.formAddGroup_0 = getElementById_359kph$result_0;
    var id_1 = HtmlView$Companion_getInstance().ID_INPUT_NEW_GROUP_NAME;
    var getElementById_359kph$result_1;
    var tmp$_1;
    try {
      getElementById_359kph$result_1 = Kotlin.isType(tmp$_1 = document.getElementById(id_1), HTMLInputElement) ? tmp$_1 : throwCCE();
    } catch (e_1) {
      if (Kotlin.isType(e_1, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_1 + "'.", e_1);
      } else
        throw e_1;
    }
    this.inputAddGroupName_0 = getElementById_359kph$result_1;
    var id_2 = HtmlView$Companion_getInstance().ID_BUTTON_NEW_GROUP;
    var getElementById_359kph$result_2;
    var tmp$_2;
    try {
      getElementById_359kph$result_2 = Kotlin.isType(tmp$_2 = document.getElementById(id_2), HTMLButtonElement) ? tmp$_2 : throwCCE();
    } catch (e_2) {
      if (Kotlin.isType(e_2, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_2 + "'.", e_2);
      } else
        throw e_2;
    }
    this.buttonAddGroup_0 = getElementById_359kph$result_2;
    var id_3 = HtmlView$Companion_getInstance().ID_LIST_EXISTING_MEMBERS;
    var getElementById_359kph$result_3;
    var tmp$_3;
    try {
      getElementById_359kph$result_3 = Kotlin.isType(tmp$_3 = document.getElementById(id_3), HTMLDivElement) ? tmp$_3 : throwCCE();
    } catch (e_3) {
      if (Kotlin.isType(e_3, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_3 + "'.", e_3);
      } else
        throw e_3;
    }
    this.divListGroupMembers_0 = getElementById_359kph$result_3;
    var id_4 = HtmlView$Companion_getInstance().ID_FORM_ADD_MEMBER;
    var getElementById_359kph$result_4;
    var tmp$_4;
    try {
      getElementById_359kph$result_4 = Kotlin.isType(tmp$_4 = document.getElementById(id_4), HTMLFormElement) ? tmp$_4 : throwCCE();
    } catch (e_4) {
      if (Kotlin.isType(e_4, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_4 + "'.", e_4);
      } else
        throw e_4;
    }
    this.formAddGroupMember_0 = getElementById_359kph$result_4;
    var id_5 = HtmlView$Companion_getInstance().ID_INPUT_NEW_MEMBER_NAME;
    var getElementById_359kph$result_5;
    var tmp$_5;
    try {
      getElementById_359kph$result_5 = Kotlin.isType(tmp$_5 = document.getElementById(id_5), HTMLInputElement) ? tmp$_5 : throwCCE();
    } catch (e_5) {
      if (Kotlin.isType(e_5, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_5 + "'.", e_5);
      } else
        throw e_5;
    }
    this.inputAddGroupMember_0 = getElementById_359kph$result_5;
    var id_6 = HtmlView$Companion_getInstance().ID_BUTTON_ADD_GROUP_MEMBER;
    var getElementById_359kph$result_6;
    var tmp$_6;
    try {
      getElementById_359kph$result_6 = Kotlin.isType(tmp$_6 = document.getElementById(id_6), HTMLButtonElement) ? tmp$_6 : throwCCE();
    } catch (e_6) {
      if (Kotlin.isType(e_6, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_6 + "'.", e_6);
      } else
        throw e_6;
    }
    this.buttonAddGroupMember_0 = getElementById_359kph$result_6;
    var id_7 = HtmlView$Companion_getInstance().ID_DIV_LIST_PREFIXES;
    var getElementById_359kph$result_7;
    var tmp$_7;
    try {
      getElementById_359kph$result_7 = Kotlin.isType(tmp$_7 = document.getElementById(id_7), HTMLDivElement) ? tmp$_7 : throwCCE();
    } catch (e_7) {
      if (Kotlin.isType(e_7, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_7 + "'.", e_7);
      } else
        throw e_7;
    }
    this.divListPrefixes_0 = getElementById_359kph$result_7;
    var id_8 = HtmlView$Companion_getInstance().ID_DIV_LIST_SEPARATORS;
    var getElementById_359kph$result_8;
    var tmp$_8;
    try {
      getElementById_359kph$result_8 = Kotlin.isType(tmp$_8 = document.getElementById(id_8), HTMLDivElement) ? tmp$_8 : throwCCE();
    } catch (e_8) {
      if (Kotlin.isType(e_8, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_8 + "'.", e_8);
      } else
        throw e_8;
    }
    this.divListSeparators_0 = getElementById_359kph$result_8;
    var id_9 = HtmlView$Companion_getInstance().ID_DIV_LIST_POSTFIXES;
    var getElementById_359kph$result_9;
    var tmp$_9;
    try {
      getElementById_359kph$result_9 = Kotlin.isType(tmp$_9 = document.getElementById(id_9), HTMLDivElement) ? tmp$_9 : throwCCE();
    } catch (e_9) {
      if (Kotlin.isType(e_9, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_9 + "'.", e_9);
      } else
        throw e_9;
    }
    this.divListPostfixes_0 = getElementById_359kph$result_9;
    var id_10 = HtmlView$Companion_getInstance().ID_INPUT_PREFIX;
    var getElementById_359kph$result_10;
    var tmp$_10;
    try {
      getElementById_359kph$result_10 = Kotlin.isType(tmp$_10 = document.getElementById(id_10), HTMLInputElement) ? tmp$_10 : throwCCE();
    } catch (e_10) {
      if (Kotlin.isType(e_10, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_10 + "'.", e_10);
      } else
        throw e_10;
    }
    this.inputPrefix_0 = getElementById_359kph$result_10;
    var id_11 = HtmlView$Companion_getInstance().ID_INPUT_SEPARATOR;
    var getElementById_359kph$result_11;
    var tmp$_11;
    try {
      getElementById_359kph$result_11 = Kotlin.isType(tmp$_11 = document.getElementById(id_11), HTMLInputElement) ? tmp$_11 : throwCCE();
    } catch (e_11) {
      if (Kotlin.isType(e_11, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_11 + "'.", e_11);
      } else
        throw e_11;
    }
    this.inputSeparator_0 = getElementById_359kph$result_11;
    var id_12 = HtmlView$Companion_getInstance().ID_INPUT_POSTFIX;
    var getElementById_359kph$result_12;
    var tmp$_12;
    try {
      getElementById_359kph$result_12 = Kotlin.isType(tmp$_12 = document.getElementById(id_12), HTMLInputElement) ? tmp$_12 : throwCCE();
    } catch (e_12) {
      if (Kotlin.isType(e_12, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_12 + "'.", e_12);
      } else
        throw e_12;
    }
    this.inputPostfix_0 = getElementById_359kph$result_12;
    var id_13 = HtmlView$Companion_getInstance().ID_DIV_RESULT_TEXT;
    var getElementById_359kph$result_13;
    var tmp$_13;
    try {
      getElementById_359kph$result_13 = Kotlin.isType(tmp$_13 = document.getElementById(id_13), HTMLDivElement) ? tmp$_13 : throwCCE();
    } catch (e_13) {
      if (Kotlin.isType(e_13, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_13 + "'.", e_13);
      } else
        throw e_13;
    }
    this.divResultText_0 = getElementById_359kph$result_13;
    var id_14 = HtmlView$Companion_getInstance().ID_BUTTON_REGENERATE;
    var getElementById_359kph$result_14;
    var tmp$_14;
    try {
      getElementById_359kph$result_14 = Kotlin.isType(tmp$_14 = document.getElementById(id_14), HTMLButtonElement) ? tmp$_14 : throwCCE();
    } catch (e_14) {
      if (Kotlin.isType(e_14, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_14 + "'.", e_14);
      } else
        throw e_14;
    }
    this.buttonRegenerate_0 = getElementById_359kph$result_14;
    var id_15 = HtmlView$Companion_getInstance().ID_BUTTON_COPY;
    var getElementById_359kph$result_15;
    var tmp$_15;
    try {
      getElementById_359kph$result_15 = Kotlin.isType(tmp$_15 = document.getElementById(id_15), HTMLButtonElement) ? tmp$_15 : throwCCE();
    } catch (e_15) {
      if (Kotlin.isType(e_15, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_15 + "'.", e_15);
      } else
        throw e_15;
    }
    this.buttonCopy_0 = getElementById_359kph$result_15;
    var createGroupCallback = HtmlView_init$lambda(this);
    var addMemberToGroupCallback = HtmlView_init$lambda_0(this);
    this.formAddGroup_0.addEventListener(HtmlView$Companion_getInstance().EVENT_SUBMIT, createGroupCallback);
    this.formAddGroupMember_0.addEventListener(HtmlView$Companion_getInstance().EVENT_SUBMIT, addMemberToGroupCallback);
    this.buttonAddGroup_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, createGroupCallback);
    this.buttonAddGroupMember_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, addMemberToGroupCallback);
    this.buttonRegenerate_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, HtmlView_init$lambda_1(this));
    this.buttonCopy_0.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK, HtmlView_init$lambda_2(this));
    this.groupListMaintainer_0 = new ListMaintainer(this.divListGroups_0, HtmlView$groupListMaintainer$lambda(this), HtmlView$groupListMaintainer$lambda_0);
    this.memberListMaintainer_0 = new ListMaintainer(this.divListGroupMembers_0, HtmlView$memberListMaintainer$lambda(this), HtmlView$memberListMaintainer$lambda_0);
    this.prefixListMaintainer_0 = new ListMaintainer(this.divListPrefixes_0, HtmlView$prefixListMaintainer$lambda(this));
    this.separatorListMaintainer_0 = new ListMaintainer(this.divListSeparators_0, HtmlView$separatorListMaintainer$lambda(this));
    this.postfixListMaintainer_0 = new ListMaintainer(this.divListPostfixes_0, HtmlView$postfixListMaintainer$lambda(this));
  }
  Object.defineProperty(HtmlView.prototype, 'newGroupName', {
    get: function () {
      return this.inputAddGroupName_0.value;
    },
    set: function (value) {
      this.inputAddGroupName_0.value = value;
    }
  });
  Object.defineProperty(HtmlView.prototype, 'newMemberName', {
    get: function () {
      return this.inputAddGroupMember_0.value;
    },
    set: function (value) {
      this.inputAddGroupMember_0.value = value;
    }
  });
  HtmlView.prototype.focusNewGroupEditor = function () {
    this.inputAddGroupName_0.focus();
  };
  HtmlView.prototype.focusNewMemberEditor = function () {
    this.inputAddGroupMember_0.focus();
  };
  HtmlView.prototype.showGroups_4cqr16$ = function (groups) {
    this.groupListMaintainer_0.showItems_4ezy5m$(groups);
  };
  HtmlView.prototype.showMembers_hxfhdp$ = function (members) {
    this.memberListMaintainer_0.showItems_4ezy5m$(members);
  };
  HtmlView.prototype.showPrefixes_mhpeer$ = function (prefixes) {
    this.prefixListMaintainer_0.showItems_4ezy5m$(prefixes);
  };
  HtmlView.prototype.showSeparators_mhpeer$ = function (separators) {
    this.separatorListMaintainer_0.showItems_4ezy5m$(separators);
  };
  HtmlView.prototype.showPostfixes_mhpeer$ = function (postfixes) {
    this.postfixListMaintainer_0.showItems_4ezy5m$(postfixes);
  };
  function HtmlView$selectGroup$lambda(closure$group) {
    return function (it) {
      it.value.classList.toggle('active', closure$group != null && equals(it.key, closure$group));
      return Unit;
    };
  }
  HtmlView.prototype.selectGroup_gdrvas$ = function (group) {
    this.groupListMaintainer_0.forEach_pib92i$(HtmlView$selectGroup$lambda(group));
  };
  HtmlView.prototype.selectPrefix_61zpoe$ = function (prefix) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  HtmlView.prototype.selectSeparator_61zpoe$ = function (separator) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  HtmlView.prototype.selectPostfix_61zpoe$ = function (postfix) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not yet implemented');
  };
  HtmlView.prototype.showGeneratedText_61zpoe$ = function (text) {
    this.divResultText_0.innerText = text;
  };
  function HtmlView$createGroupItem$lambda$lambda(this$HtmlView, closure$group) {
    return function (it) {
      this$HtmlView.controller_0.selectGroup_gdrvas$(closure$group);
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda$lambda$lambda$lambda(closure$group, this$HtmlView) {
    return function (event) {
      if (window.confirm("Do you really want to delete group '" + closure$group.name + "'?")) {
        this$HtmlView.controller_0.removeGroup_bzgne3$(closure$group);
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
      set_onClickFunction($receiver, HtmlView$createGroupItem$lambda$lambda(this$HtmlView, closure$group));
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
  function HtmlView$createMemberItem$lambda$lambda$lambda(this$HtmlView, closure$member) {
    return function (it) {
      this$HtmlView.controller_0.toggleGroupMemberActive_j0ulny$(closure$member);
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda$lambda(closure$member, this$HtmlView) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(this$HtmlView.getIconText_0(closure$member));
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda_0(closure$member, this$HtmlView) {
    return function ($receiver) {
      var classes = 'badge badge-pill mr-1 ' + this$HtmlView.getBadgeClass_0(closure$member);
      var block = HtmlView$createMemberItem$lambda$lambda$lambda$lambda(closure$member, this$HtmlView);
      visitTag(new SPAN_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_0(block));
      $receiver.unaryPlus_pdl1vz$(closure$member.name);
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda$lambda_0(closure$member, this$HtmlView) {
    return function (event) {
      if (window.confirm("Do you really want to remove member '" + closure$member.name + "'?")) {
        this$HtmlView.controller_0.removeGroupMember_j0ulny$(closure$member);
      }event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda$lambda_1(closure$member, this$HtmlView) {
    return function ($receiver) {
      set_title($receiver, "Remove member '" + closure$member.name + "'.");
      $receiver.unaryPlus_pdl1vz$('\uD83D\uDDD1');
      set_onClickFunction($receiver, HtmlView$createMemberItem$lambda$lambda$lambda$lambda_0(closure$member, this$HtmlView));
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda$lambda(this$HtmlView, closure$member) {
    return function ($receiver) {
      set_onClickFunction($receiver, HtmlView$createMemberItem$lambda$lambda$lambda(this$HtmlView, closure$member));
      var block = HtmlView$createMemberItem$lambda$lambda$lambda_0(closure$member, this$HtmlView);
      visitTag(new DIV_init(attributesMapOf_0('class', null), $receiver.consumer), visit$lambda_1(block));
      var classes = 'gr-action-link ml-1';
      var block_0 = HtmlView$createMemberItem$lambda$lambda$lambda_1(closure$member, this$HtmlView);
      visitTag(new A_init(attributesMapOf(['href', null, 'target', null, 'class', classes]), $receiver.consumer), visit$lambda(block_0));
      return Unit;
    };
  }
  function HtmlView$createMemberItem$lambda(this$HtmlView, closure$member) {
    return function ($receiver) {
      var type = ButtonType.button;
      var classes = 'btn btn-light d-flex justify-content-between gr-action-link-container gr-full-width';
      var block = HtmlView$createMemberItem$lambda$lambda(this$HtmlView, closure$member);
      visitTag(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver.consumer), visit$lambda_2(block));
      return Unit;
    };
  }
  HtmlView.prototype.createMemberItem_0 = function (member) {
    var $receiver = get_create(document);
    return visitTagAndFinalize(new DIV_init(attributesMapOf_0('class', 'col-sm-6 col-md-6 col-lg-4 col-xl-3 p-1'), $receiver), $receiver, visitAndFinalize$lambda_0(HtmlView$createMemberItem$lambda(this, member)));
  };
  function HtmlView$createTextItem$lambda(it) {
    it.stopPropagation();
    return Unit;
  }
  function HtmlView$createTextItem$lambda_0(it) {
    it.stopPropagation();
    return Unit;
  }
  function HtmlView$createTextItem$lambda$lambda(closure$text, closure$onSelectFunction) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(closure$text);
      set_onClickFunction($receiver, closure$onSelectFunction);
      return Unit;
    };
  }
  function HtmlView$createTextItem$lambda$lambda_0(closure$text, closure$onDeleteFunction) {
    return function ($receiver) {
      set_title($receiver, "Remove '" + closure$text + "'.");
      $receiver.unaryPlus_pdl1vz$('\uD83D\uDDD1');
      set_onClickFunction($receiver, closure$onDeleteFunction);
      return Unit;
    };
  }
  function HtmlView$createTextItem$lambda_1(closure$text, closure$onSelectFunction, closure$onDeleteFunction) {
    return function ($receiver) {
      var block = HtmlView$createTextItem$lambda$lambda(closure$text, closure$onSelectFunction);
      visitTag(new DIV_init(attributesMapOf_0('class', 'ml-2'), $receiver.consumer), visit$lambda_1(block));
      var classes = 'gr-action-link ml-1';
      var block_0 = HtmlView$createTextItem$lambda$lambda_0(closure$text, closure$onDeleteFunction);
      visitTag(new A_init(attributesMapOf(['href', null, 'target', null, 'class', classes]), $receiver.consumer), visit$lambda(block_0));
      return Unit;
    };
  }
  HtmlView.prototype.createTextItem_0 = function (text, onSelectFunction, onDeleteFunction) {
    if (onSelectFunction === void 0)
      onSelectFunction = HtmlView$createTextItem$lambda;
    if (onDeleteFunction === void 0)
      onDeleteFunction = HtmlView$createTextItem$lambda_0;
    var $receiver = get_create(document);
    var type = ButtonType.button;
    var classes = 'list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container';
    var tmp$;
    return Kotlin.isType(tmp$ = visitTagAndFinalize(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', classes]), $receiver), $receiver, visitAndFinalize$lambda(HtmlView$createTextItem$lambda_1(text, onSelectFunction, onDeleteFunction))), HTMLButtonElement_0) ? tmp$ : throwCCE();
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
    this.EVENT_SUBMIT = 'submit';
    this.ID_LIST_EXISTING_GROUPS = 'gr_existing_groups';
    this.ID_INPUT_NEW_GROUP_NAME = 'gr_new_group_name';
    this.ID_BUTTON_NEW_GROUP = 'gr_create_new_group';
    this.ID_LIST_EXISTING_MEMBERS = 'gr_existing_members';
    this.ID_INPUT_NEW_MEMBER_NAME = 'gr_new_member_name';
    this.ID_BUTTON_ADD_GROUP_MEMBER = 'gr_add_group_member';
    this.ID_FORM_ADD_GROUP = 'gr_add_group_form';
    this.ID_FORM_ADD_MEMBER = 'gr_add_member_form';
    this.ID_DIV_LIST_PREFIXES = 'gr_div_list_prefixes';
    this.ID_DIV_LIST_SEPARATORS = 'gr_div_list_separators';
    this.ID_DIV_LIST_POSTFIXES = 'gr_div_list_postfixes';
    this.ID_INPUT_PREFIX = 'gr_input_prefix';
    this.ID_INPUT_SEPARATOR = 'gr_input_separator';
    this.ID_INPUT_POSTFIX = 'gr_input_postfix';
    this.ID_DIV_RESULT_TEXT = 'gr_result_text';
    this.ID_BUTTON_REGENERATE = 'gr_btn_regenerate';
    this.ID_BUTTON_COPY = 'gr_btn_copy';
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
  function HtmlView_init$lambda(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.addGroup_61zpoe$(this$HtmlView.newGroupName);
      return Unit;
    };
  }
  function HtmlView_init$lambda_0(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.addGroupMember_61zpoe$(this$HtmlView.newMemberName);
      return Unit;
    };
  }
  function HtmlView_init$lambda_1(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.generateRandomOrder();
      return Unit;
    };
  }
  function HtmlView_init$lambda_2(this$HtmlView) {
    return function (it) {
      navigator.clipboard.writeText(this$HtmlView.divResultText_0.innerText);
      return Unit;
    };
  }
  function HtmlView$groupListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createGroupItem_0(it);
    };
  }
  function HtmlView$groupListMaintainer$lambda_0(it) {
    return it.name;
  }
  function HtmlView$memberListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createMemberItem_0(it);
    };
  }
  function HtmlView$memberListMaintainer$lambda_0(it) {
    return it.name;
  }
  function HtmlView$prefixListMaintainer$lambda$lambda(this$HtmlView, closure$it) {
    return function (event) {
      this$HtmlView.controller_0.selectPrefix_61zpoe$(closure$it);
      event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$prefixListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createTextItem_0(it, HtmlView$prefixListMaintainer$lambda$lambda(this$HtmlView, it));
    };
  }
  function HtmlView$separatorListMaintainer$lambda$lambda(this$HtmlView, closure$it) {
    return function (event) {
      this$HtmlView.controller_0.selectSeparator_61zpoe$(closure$it);
      event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$separatorListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createTextItem_0(it, HtmlView$separatorListMaintainer$lambda$lambda(this$HtmlView, it));
    };
  }
  function HtmlView$postfixListMaintainer$lambda$lambda(this$HtmlView, closure$it) {
    return function (event) {
      this$HtmlView.controller_0.selectPostfix_61zpoe$(closure$it);
      event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$postfixListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createTextItem_0(it, HtmlView$postfixListMaintainer$lambda$lambda(this$HtmlView, it));
    };
  }
  HtmlView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlView',
    interfaces: [DisplayContract$View]
  };
  function ListMaintainer(parent, elementCreator, selector) {
    if (selector === void 0)
      selector = ListMaintainer_init$lambda;
    this.parent = parent;
    this.elementCreator = elementCreator;
    this.selector = selector;
    this.elements_0 = emptyMap();
  }
  function ListMaintainer$showItems$lambda(this$ListMaintainer) {
    return function (it) {
      return this$ListMaintainer.shouldBeRemoved_0(it);
    };
  }
  function ListMaintainer$showItems$lambda_0(this$ListMaintainer) {
    return function (it) {
      return this$ListMaintainer.selector(it);
    };
  }
  ListMaintainer.prototype.showItems_4ezy5m$ = function (items) {
    this.removeChildren_0(this.parent, ListMaintainer$showItems$lambda(this));
    var $receiver = reversed(sortedWith(items, new Comparator$ObjectLiteral_0(compareBy$lambda_0(ListMaintainer$showItems$lambda_0(this)))));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.elementCreator(item)));
    }
    this.elements_0 = toMap(destination);
    var tmp$_0;
    tmp$_0 = this.elements_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.parent.prepend(element.value);
    }
  };
  ListMaintainer.prototype.forEach_pib92i$ = function (action) {
    var tmp$;
    tmp$ = this.elements_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      action(element);
    }
  };
  ListMaintainer.prototype.shouldBeRemoved_0 = function ($receiver) {
    return !(Kotlin.isType($receiver, HTMLFormElement) || $receiver.classList.contains('gr-always-there'));
  };
  ListMaintainer.prototype.removeChildren_0 = function ($receiver, filter) {
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
  function ListMaintainer_init$lambda(it) {
    return toString(it);
  }
  ListMaintainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListMaintainer',
    interfaces: []
  };
  function UiController() {
    this.view_0 = new HtmlView(this);
    CookieBanner_getInstance().initialize();
    this.fillUi_0();
    this.selectedGroup_0 = null;
  }
  UiController.prototype.selectGroup_gdrvas$ = function (group) {
    var tmp$;
    if (group != null) {
      ApplicationSettings_getInstance().setGroup_bzgne3$(group);
    }this.selectedGroup_0 = group;
    this.view_0.selectGroup_gdrvas$(group);
    this.view_0.showMembers_hxfhdp$((tmp$ = group != null ? group.members : null) != null ? tmp$ : emptyList());
    this.fillUi_0();
  };
  UiController.prototype.addGroup_61zpoe$ = function (name) {
    var tmp$;
    if (isBlank(name)) {
      return null;
    }var validGroupName = this.toValidName_0(name);
    var group = (tmp$ = ApplicationSettings_getInstance().getGroup_61zpoe$(validGroupName)) != null ? tmp$ : new Group(validGroupName);
    this.view_0.newGroupName = '';
    this.selectGroup_gdrvas$(group);
    this.view_0.focusNewGroupEditor();
    return group;
  };
  UiController.prototype.removeGroup_bzgne3$ = function (group) {
    ApplicationSettings_getInstance().deleteGroup_61zpoe$(group.name);
    if (equals(group, this.selectedGroup_0)) {
      this.selectGroup_gdrvas$(group);
    }this.fillUi_0(void 0, void 0, void 0, false);
  };
  UiController.prototype.addGroupMember_61zpoe$ = function (name) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var validName = this.toValidName_0(name);
    var tmp$_3;
    if ((tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null) {
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$_4;
        tmp$_4 = tmp$_0.iterator();
        while (tmp$_4.hasNext()) {
          var element = tmp$_4.next();
          if (equals(element.name, validName)) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }}
        firstOrNull$result = null;
      }
       while (false);
      tmp$_3 = firstOrNull$result;
    } else
      tmp$_3 = null;
    if (tmp$_3 == null) {
      (tmp$_2 = (tmp$_1 = this.selectedGroup_0) != null ? tmp$_1.members : null) != null ? tmp$_2.add_11rb$(new Member(validName)) : null;
    }this.fireCurrentGroupChanged_0();
    this.view_0.newMemberName = '';
    this.view_0.focusNewMemberEditor();
  };
  function UiController$removeGroupMember$lambda(closure$member) {
    return function (it) {
      return equals(it.name, closure$member.name);
    };
  }
  UiController.prototype.removeGroupMember_j0ulny$ = function (member) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null ? removeAll(tmp$_0, UiController$removeGroupMember$lambda(member)) : null;
    this.fireCurrentGroupChanged_0();
  };
  UiController.prototype.toggleGroupMemberActive_j0ulny$ = function (member) {
    member.active = !member.active;
    this.fireCurrentGroupChanged_0();
  };
  UiController.prototype.fireCurrentGroupChanged_0 = function () {
    var tmp$;
    if ((tmp$ = this.selectedGroup_0) != null) {
      ApplicationSettings_getInstance().setGroup_bzgne3$(tmp$);
    }this.fillUi_0();
  };
  UiController.prototype.selectPrefix_61zpoe$ = function (prefix) {
    ApplicationSettings_getInstance().currentPrefix = prefix;
  };
  UiController.prototype.selectSeparator_61zpoe$ = function (separator) {
    ApplicationSettings_getInstance().currentSeparator = separator;
  };
  UiController.prototype.selectPostfix_61zpoe$ = function (postfix) {
    ApplicationSettings_getInstance().currentPostfix = postfix;
  };
  function UiController$addPrefix$lambda() {
    return ApplicationSettings_getInstance().prefixes;
  }
  function UiController$addPrefix$lambda_0(it) {
    ApplicationSettings_getInstance().prefixes = it;
    return Unit;
  }
  UiController.prototype.addPrefix_61zpoe$ = function (prefix) {
    this.addListEntry_0(UiController$addPrefix$lambda, UiController$addPrefix$lambda_0, prefix);
  };
  function UiController$addSeparator$lambda() {
    return ApplicationSettings_getInstance().separators;
  }
  function UiController$addSeparator$lambda_0(it) {
    ApplicationSettings_getInstance().separators = it;
    return Unit;
  }
  UiController.prototype.addSeparator_61zpoe$ = function (separator) {
    this.addListEntry_0(UiController$addSeparator$lambda, UiController$addSeparator$lambda_0, separator);
  };
  function UiController$addPostfix$lambda() {
    return ApplicationSettings_getInstance().postfixes;
  }
  function UiController$addPostfix$lambda_0(it) {
    ApplicationSettings_getInstance().postfixes = it;
    return Unit;
  }
  UiController.prototype.addPostfix_61zpoe$ = function (postfix) {
    this.addListEntry_0(UiController$addPostfix$lambda, UiController$addPostfix$lambda_0, postfix);
  };
  function UiController$removePrefix$lambda() {
    return ApplicationSettings_getInstance().prefixes;
  }
  function UiController$removePrefix$lambda_0(it) {
    ApplicationSettings_getInstance().prefixes = it;
    return Unit;
  }
  UiController.prototype.removePrefix_61zpoe$ = function (prefix) {
    this.removeListEntry_0(UiController$removePrefix$lambda, UiController$removePrefix$lambda_0, prefix);
  };
  function UiController$removeSeparator$lambda() {
    return ApplicationSettings_getInstance().separators;
  }
  function UiController$removeSeparator$lambda_0(it) {
    ApplicationSettings_getInstance().separators = it;
    return Unit;
  }
  UiController.prototype.removeSeparator_61zpoe$ = function (separator) {
    this.removeListEntry_0(UiController$removeSeparator$lambda, UiController$removeSeparator$lambda_0, separator);
  };
  function UiController$removePostfix$lambda() {
    return ApplicationSettings_getInstance().postfixes;
  }
  function UiController$removePostfix$lambda_0(it) {
    ApplicationSettings_getInstance().postfixes = it;
    return Unit;
  }
  UiController.prototype.removePostfix_61zpoe$ = function (postfix) {
    this.removeListEntry_0(UiController$removePostfix$lambda, UiController$removePostfix$lambda_0, postfix);
  };
  UiController.prototype.addListEntry_0 = function (provider, consumer, itemToAdd) {
    var list = toMutableList(provider());
    list.add_11rb$(itemToAdd);
    consumer(list);
  };
  UiController.prototype.removeListEntry_0 = function (provider, consumer, itemToDelete) {
    var list = toMutableList(provider());
    list.remove_11rb$(itemToDelete);
    consumer(list);
  };
  UiController.prototype.changeList_0 = function (provider, consumer, changeList) {
    var list = toMutableList(provider());
    changeList(list);
    consumer(list);
  };
  UiController.prototype.generateRandomOrder = function () {
    this.view_0.showGeneratedText_61zpoe$(this.createRandomText_0());
  };
  UiController.prototype.fillUi_0 = function (refreshGroups, refreshMembers, refreshTextAdditions, regenerateText) {
    if (refreshGroups === void 0)
      refreshGroups = true;
    if (refreshMembers === void 0)
      refreshMembers = true;
    if (refreshTextAdditions === void 0)
      refreshTextAdditions = true;
    if (regenerateText === void 0)
      regenerateText = true;
    var tmp$, tmp$_0;
    if (refreshGroups) {
      this.view_0.showGroups_4cqr16$(ApplicationSettings_getInstance().getGroups());
    }if (refreshMembers) {
      this.view_0.showMembers_hxfhdp$((tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null ? tmp$_0 : emptyList());
    }this.view_0.selectGroup_gdrvas$(this.selectedGroup_0);
    if (refreshTextAdditions) {
      this.view_0.showPrefixes_mhpeer$(ApplicationSettings_getInstance().prefixes);
      this.view_0.showSeparators_mhpeer$(ApplicationSettings_getInstance().separators);
      this.view_0.showPostfixes_mhpeer$(ApplicationSettings_getInstance().postfixes);
    }if (regenerateText) {
      this.generateRandomOrder();
    }};
  UiController.prototype.createRandomText_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var tmp$_4;
    if ((tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null) {
      var destination = ArrayList_init();
      var tmp$_5;
      tmp$_5 = tmp$_0.iterator();
      while (tmp$_5.hasNext()) {
        var element = tmp$_5.next();
        if (element.active)
          destination.add_11rb$(element);
      }
      tmp$_4 = destination;
    } else
      tmp$_4 = null;
    var tmp$_6;
    if ((tmp$_1 = tmp$_4) != null) {
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault(tmp$_1, 10));
      var tmp$_7;
      tmp$_7 = tmp$_1.iterator();
      while (tmp$_7.hasNext()) {
        var item = tmp$_7.next();
        destination_0.add_11rb$(item.name);
      }
      tmp$_6 = destination_0;
    } else
      tmp$_6 = null;
    return joinToString((tmp$_3 = (tmp$_2 = tmp$_6) != null ? shuffled(tmp$_2) : null) != null ? tmp$_3 : emptyList(), ApplicationSettings_getInstance().currentSeparator, ApplicationSettings_getInstance().currentPrefix, ApplicationSettings_getInstance().currentPostfix);
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
