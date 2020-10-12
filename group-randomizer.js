if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'group-randomizer'.");
}if (typeof this['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'] === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json-jsLegacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json-jsLegacy' is loaded prior to 'group-randomizer'.");
}if (typeof this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core-jsLegacy' is loaded prior to 'group-randomizer'.");
}if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'group-randomizer'.");
}this['group-randomizer'] = function (_, Kotlin, $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy, $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy, $module$kotlinx_html_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var Json = $module$kotlinx_serialization_kotlinx_serialization_json_jsLegacy.kotlinx.serialization.json.Json;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var getKClass = Kotlin.getKClass;
  var createKType = Kotlin.createKType;
  var createInvariantKTypeProjection = Kotlin.createInvariantKTypeProjection;
  var equals = Kotlin.equals;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_4c7yge$;
  var List = Kotlin.kotlin.collections.List;
  var PrimitiveClasses$stringClass = Kotlin.kotlin.reflect.js.internal.PrimitiveClasses.stringClass;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var serializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.serializer_ca95z9$;
  var KSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.KSerializer;
  var throwCCE = Kotlin.throwCCE;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var Exception = Kotlin.kotlin.Exception;
  var Unit = Kotlin.kotlin.Unit;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var isBlank = Kotlin.kotlin.text.isBlank_gw00vp$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var shuffled = Kotlin.kotlin.collections.shuffled_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_5cw0du$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var PluginGeneratedSerialDescriptor = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.PluginGeneratedSerialDescriptor;
  var ArrayListSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.ArrayListSerializer;
  var UnknownFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.UnknownFieldException;
  var internal = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal;
  var GeneratedSerializer = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.internal.GeneratedSerializer;
  var MissingFieldException = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy.kotlinx.serialization.MissingFieldException;
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var ButtonType = $module$kotlinx_html_js.kotlinx.html.ButtonType;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_title = $module$kotlinx_html_js.kotlinx.html.set_title_ueiko3$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var attributesMapOf = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_alerag$;
  var A_init = $module$kotlinx_html_js.kotlinx.html.A;
  var visitTag = $module$kotlinx_html_js.kotlinx.html.visitTag_xwv8ym$;
  var attributesMapOf_0 = $module$kotlinx_html_js.kotlinx.html.attributesMapOf_jyasbz$;
  var SPAN_init = $module$kotlinx_html_js.kotlinx.html.SPAN;
  var DIV_init = $module$kotlinx_html_js.kotlinx.html.DIV;
  var enumEncode = $module$kotlinx_html_js.kotlinx.html.attributes.enumEncode_m4whry$;
  var BUTTON_init = $module$kotlinx_html_js.kotlinx.html.BUTTON;
  var visitTagAndFinalize = $module$kotlinx_html_js.kotlinx.html.visitTagAndFinalize_g9qte5$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var downTo = Kotlin.kotlin.ranges.downTo_dqglrj$;
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var Comparator = Kotlin.kotlin.Comparator;
  ApplicationSettings.prototype = Object.create(AbstractApplicationSettings.prototype);
  ApplicationSettings.prototype.constructor = ApplicationSettings;
  function ApplicationSettings() {
    ApplicationSettings_instance = this;
    AbstractApplicationSettings.call(this);
    this.KEY_LAST_VERSION_0 = 'user.lastVersion';
    this.KEY_CURRENT_GROUP_NAME_0 = 'current.group.name';
    this.KEY_CURRENT_PREFIX_0 = 'current.prefix';
    this.KEY_CURRENT_SEPARATOR_0 = 'current.separator';
    this.KEY_CURRENT_POSTFIX_0 = 'current.postfix';
    this.KEY_LIST_PREFIXES_0 = 'list.prefixes';
    this.KEY_LIST_SEPARATORS_0 = 'list.separators';
    this.KEY_LIST_POSTFIXES_0 = 'list.postfixes';
    this.VAL_VERSION_0 = 1;
    this.VAL_DEFAULT_GROUP_NAME_0 = '';
    this.VAL_DEFAULT_PREFIX_8be2vx$ = '';
    this.VAL_DEFAULT_SEPARATOR_8be2vx$ = ', ';
    this.VAL_DEFAULT_POSTFIX_8be2vx$ = '';
    this.VAL_DEFAULT_LIST_PREFIXES_0 = '["","Today\'s order: "]';
    this.VAL_DEFAULT_LIST_SEPARATOR_0 = '[", "," : "]';
    this.VAL_DEFAULT_LIST_POSTFIXES_0 = '["","."]';
  }
  ApplicationSettings.prototype.isNewUser = function () {
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = this.get_0(this.KEY_LAST_VERSION_0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0) < 1;
  };
  ApplicationSettings.prototype.storeUserLastInfo = function () {
    this.set_0(this.KEY_LAST_VERSION_0, 1);
  };
  Object.defineProperty(ApplicationSettings.prototype, 'mutableGroups_0', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      var tmp$_1;
      if ((tmp$ = this.get_0('groups')) != null) {
        var $receiver = Json.Default;
        var tmp$_2;
        tmp$_1 = $receiver.decodeFromString_awif5v$(Kotlin.isType(tmp$_2 = serializer($receiver.serializersModule, createKType(getKClass(MutableList), [createInvariantKTypeProjection(createKType(getKClass(Group), [], false))], true)), KSerializer) ? tmp$_2 : throwCCE(), tmp$);
      } else
        tmp$_1 = null;
      return (tmp$_0 = tmp$_1) != null ? tmp$_0 : ArrayList_init();
    },
    set: function (value) {
      var $receiver = Json.Default;
      var tmp$;
      this.set_1('groups', $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$ = serializer($receiver.serializersModule, createKType(getKClass(MutableList), [createInvariantKTypeProjection(createKType(getKClass(Group), [], false))], false)), KSerializer) ? tmp$ : throwCCE(), value));
    }
  });
  ApplicationSettings.prototype.getGroups = function () {
    return this.mutableGroups_0;
  };
  ApplicationSettings.prototype.setGroup_f2hml6$ = function (group) {
    var $receiver = this.mutableGroups_0;
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
    this.mutableGroups_0 = newGroups;
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
    var $receiver = this.mutableGroups_0;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!equals(name, element.name))
        destination.add_11rb$(element);
    }
    this.mutableGroups_0 = toMutableList(destination);
  };
  Object.defineProperty(ApplicationSettings.prototype, 'selectedGroupName', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_GROUP_NAME_0)) != null ? tmp$ : this.VAL_DEFAULT_GROUP_NAME_0;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_GROUP_NAME_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPrefix', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_PREFIX_0)) != null ? tmp$ : this.VAL_DEFAULT_PREFIX_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_PREFIX_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentSeparator', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_SEPARATOR_0)) != null ? tmp$ : this.VAL_DEFAULT_SEPARATOR_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_SEPARATOR_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'currentPostfix', {
    configurable: true,
    get: function () {
      var tmp$;
      return (tmp$ = this.get_0(this.KEY_CURRENT_POSTFIX_0)) != null ? tmp$ : this.VAL_DEFAULT_POSTFIX_8be2vx$;
    },
    set: function (value) {
      this.set_1(this.KEY_CURRENT_POSTFIX_0, value);
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'prefixes', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = Json.Default;
      var string = (tmp$ = this.get_0(this.KEY_LIST_PREFIXES_0)) != null ? tmp$ : this.VAL_DEFAULT_LIST_PREFIXES_0;
      var tmp$_1;
      return tmp$_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(tmp$_0.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
    },
    set: function (value) {
      var tmp$ = this.KEY_LIST_PREFIXES_0;
      var $receiver = Json.Default;
      var tmp$_0;
      this.set_1(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false))], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'separators', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = Json.Default;
      var string = (tmp$ = this.get_0(this.KEY_LIST_SEPARATORS_0)) != null ? tmp$ : this.VAL_DEFAULT_LIST_SEPARATOR_0;
      var tmp$_1;
      return tmp$_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(tmp$_0.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
    },
    set: function (value) {
      var tmp$ = this.KEY_LIST_SEPARATORS_0;
      var $receiver = Json.Default;
      var tmp$_0;
      this.set_1(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false))], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
    }
  });
  Object.defineProperty(ApplicationSettings.prototype, 'postfixes', {
    configurable: true,
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = Json.Default;
      var string = (tmp$ = this.get_0(this.KEY_LIST_POSTFIXES_0)) != null ? tmp$ : this.VAL_DEFAULT_LIST_POSTFIXES_0;
      var tmp$_1;
      return tmp$_0.decodeFromString_awif5v$(Kotlin.isType(tmp$_1 = serializer(tmp$_0.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false))], false)), KSerializer) ? tmp$_1 : throwCCE(), string);
    },
    set: function (value) {
      var tmp$ = this.KEY_LIST_POSTFIXES_0;
      var $receiver = Json.Default;
      var tmp$_0;
      this.set_1(tmp$, $receiver.encodeToString_tf03ej$(Kotlin.isType(tmp$_0 = serializer($receiver.serializersModule, createKType(getKClass(List), [createInvariantKTypeProjection(createKType(PrimitiveClasses$stringClass, [], false))], false)), KSerializer) ? tmp$_0 : throwCCE(), value));
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
  function UiController() {
    UiController$Companion_getInstance();
    this.view_0 = new HtmlView(this);
    this.selectedGroup_0 = null;
    CookieBanner_getInstance().initialize();
    this.refreshUi_0();
    if (!this.view_0.selectPreselectedGroup()) {
      this.tryToSelectGroupByName_61zpoe$(ApplicationSettings_getInstance().selectedGroupName);
    }}
  UiController.prototype.selectGroup_u2lxnd$ = function (group) {
    var tmp$;
    if (group != null) {
      ApplicationSettings_getInstance().setGroup_f2hml6$(group);
      ApplicationSettings_getInstance().selectedGroupName = group.name;
    }this.selectedGroup_0 = group;
    this.view_0.selectGroup_u2lxnd$(group);
    this.view_0.showMembers_x6m2tk$((tmp$ = group != null ? group.members : null) != null ? tmp$ : emptyList());
    this.refreshUi_0();
  };
  UiController.prototype.tryToSelectGroupByName_61zpoe$ = function (name) {
    var tmp$;
    var $receiver = ApplicationSettings_getInstance().getGroups();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }}
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null) {
      this.selectGroup_u2lxnd$(tmp$);
    }};
  UiController.prototype.addGroup_61zpoe$ = function (name) {
    var tmp$;
    if (isBlank(name)) {
      return null;
    }var validGroupName = this.toValidName_0(name);
    var group = (tmp$ = ApplicationSettings_getInstance().getGroup_61zpoe$(validGroupName)) != null ? tmp$ : new Group(validGroupName);
    this.selectGroup_u2lxnd$(group);
    this.view_0.focusNewGroupEditor();
    return group;
  };
  UiController.prototype.removeGroup_f2hml6$ = function (group) {
    ApplicationSettings_getInstance().deleteGroup_61zpoe$(group.name);
    if (equals(group, this.selectedGroup_0)) {
      this.selectGroup_u2lxnd$(firstOrNull(ApplicationSettings_getInstance().getGroups()));
      this.view_0.focusNewGroupEditor();
    } else {
      this.refreshUi_0(void 0, void 0, false, false);
    }
  };
  UiController.prototype.addGroupMember_61zpoe$ = function (name) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (isBlank(name)) {
      return null;
    }var validName = this.toValidName_0(name);
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
    this.view_0.focusNewMemberEditor();
    return validName;
  };
  function UiController$removeGroupMember$lambda(closure$member) {
    return function (it) {
      return equals(it.name, closure$member.name);
    };
  }
  UiController.prototype.removeGroupMember_wpoo0j$ = function (member) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null ? removeAll(tmp$_0, UiController$removeGroupMember$lambda(member)) : null;
    this.fireCurrentGroupChanged_0();
  };
  UiController.prototype.toggleGroupMemberActive_wpoo0j$ = function (member) {
    member.active = !member.active;
    this.fireCurrentGroupChanged_0();
  };
  UiController.prototype.setAllGroupMembers_6taknv$ = function (active) {
    var tmp$, tmp$_0;
    if ((tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null) {
      var tmp$_1;
      tmp$_1 = tmp$_0.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        element.active = active;
      }
    }this.fireCurrentGroupChanged_0();
  };
  UiController.prototype.fireCurrentGroupChanged_0 = function () {
    var tmp$;
    if ((tmp$ = this.selectedGroup_0) != null) {
      ApplicationSettings_getInstance().setGroup_f2hml6$(tmp$);
    }this.refreshUi_0(void 0, void 0, false);
  };
  UiController.prototype.selectPrefix_61zpoe$ = function (prefix) {
    ApplicationSettings_getInstance().currentPrefix = prefix;
    this.refreshUi_0(false, false, true, true);
    this.view_0.selectPrefix_pdl1vj$(ApplicationSettings_getInstance().currentPrefix);
  };
  UiController.prototype.selectSeparator_61zpoe$ = function (separator) {
    ApplicationSettings_getInstance().currentSeparator = separator;
    this.refreshUi_0(false, false, true, true);
    this.view_0.selectSeparator_pdl1vj$(ApplicationSettings_getInstance().currentSeparator);
  };
  UiController.prototype.selectPostfix_61zpoe$ = function (postfix) {
    ApplicationSettings_getInstance().currentPostfix = postfix;
    this.refreshUi_0(false, false, true, true);
    this.view_0.selectPostfix_pdl1vj$(ApplicationSettings_getInstance().currentPostfix);
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
    if (ApplicationSettings_getInstance().prefixes.isEmpty()) {
      ApplicationSettings_getInstance().prefixes = listOf(ApplicationSettings_getInstance().VAL_DEFAULT_PREFIX_8be2vx$);
    }if (equals(ApplicationSettings_getInstance().currentPrefix, prefix)) {
      this.selectPrefix_61zpoe$(first(ApplicationSettings_getInstance().prefixes));
    }};
  function UiController$removeSeparator$lambda() {
    return ApplicationSettings_getInstance().separators;
  }
  function UiController$removeSeparator$lambda_0(it) {
    ApplicationSettings_getInstance().separators = it;
    return Unit;
  }
  UiController.prototype.removeSeparator_61zpoe$ = function (separator) {
    this.removeListEntry_0(UiController$removeSeparator$lambda, UiController$removeSeparator$lambda_0, separator);
    if (ApplicationSettings_getInstance().separators.isEmpty()) {
      ApplicationSettings_getInstance().separators = listOf(ApplicationSettings_getInstance().VAL_DEFAULT_SEPARATOR_8be2vx$);
    }if (equals(ApplicationSettings_getInstance().currentSeparator, separator)) {
      this.selectSeparator_61zpoe$(first(ApplicationSettings_getInstance().separators));
    }};
  function UiController$removePostfix$lambda() {
    return ApplicationSettings_getInstance().postfixes;
  }
  function UiController$removePostfix$lambda_0(it) {
    ApplicationSettings_getInstance().postfixes = it;
    return Unit;
  }
  UiController.prototype.removePostfix_61zpoe$ = function (postfix) {
    this.removeListEntry_0(UiController$removePostfix$lambda, UiController$removePostfix$lambda_0, postfix);
    if (ApplicationSettings_getInstance().postfixes.isEmpty()) {
      ApplicationSettings_getInstance().postfixes = listOf(ApplicationSettings_getInstance().VAL_DEFAULT_POSTFIX_8be2vx$);
    }if (equals(ApplicationSettings_getInstance().currentPostfix, postfix)) {
      this.selectPostfix_61zpoe$(first(ApplicationSettings_getInstance().postfixes));
    }};
  UiController.prototype.addListEntry_0 = function (getList, setList, itemToAdd) {
    var list = toMutableList(getList());
    if (!list.contains_11rb$(itemToAdd)) {
      list.add_11rb$(itemToAdd);
    }setList(list);
    this.refreshUi_0(false, false, true, false);
  };
  UiController.prototype.removeListEntry_0 = function (getList, setList, itemToDelete) {
    var list = toMutableList(getList());
    list.remove_11rb$(itemToDelete);
    setList(list);
    this.refreshUi_0(false, false, true, false);
  };
  UiController.prototype.changeList_0 = function (getList, setList, changeList) {
    var list = toMutableList(getList());
    changeList(list);
    setList(list);
  };
  UiController.prototype.generateRandomOrder = function () {
    this.view_0.showGeneratedText_61zpoe$(this.createRandomText_0());
  };
  UiController.prototype.refreshUi_0 = function (refreshGroups, refreshMembers, refreshTextAdditions, regenerateText) {
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
      this.view_0.showGroups_hgjbqt$(ApplicationSettings_getInstance().getGroups());
    }if (refreshMembers) {
      this.view_0.showMembers_x6m2tk$((tmp$_0 = (tmp$ = this.selectedGroup_0) != null ? tmp$.members : null) != null ? tmp$_0 : emptyList());
    }this.view_0.selectGroup_u2lxnd$(this.selectedGroup_0);
    if (refreshTextAdditions) {
      this.view_0.showPrefixes_mhpeer$(ApplicationSettings_getInstance().prefixes);
      this.view_0.selectPrefix_pdl1vj$(ApplicationSettings_getInstance().currentPrefix);
      this.view_0.showSeparators_mhpeer$(ApplicationSettings_getInstance().separators);
      this.view_0.selectSeparator_pdl1vj$(ApplicationSettings_getInstance().currentSeparator);
      this.view_0.showPostfixes_mhpeer$(ApplicationSettings_getInstance().postfixes);
      this.view_0.selectPostfix_pdl1vj$(ApplicationSettings_getInstance().currentPostfix);
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
    var $receiver_0 = UiController$Companion_getInstance().REGEX_WHITESPACES_0.replace_x2uqeu$($receiver, ' ');
    var tmp$;
    return trim(Kotlin.isCharSequence(tmp$ = $receiver_0) ? tmp$ : throwCCE()).toString();
  };
  function UiController$Companion() {
    UiController$Companion_instance = this;
    this.REGEX_WHITESPACES_0 = Regex_init('\\s+');
  }
  UiController$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UiController$Companion_instance = null;
  function UiController$Companion_getInstance() {
    if (UiController$Companion_instance === null) {
      new UiController$Companion();
    }return UiController$Companion_instance;
  }
  UiController.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UiController',
    interfaces: [DisplayContract$Controller]
  };
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
  AbstractApplicationSettings.prototype.set_0 = function (key, value) {
    this.set_1(key, value.toString());
  };
  AbstractApplicationSettings.prototype.set_2 = function (key, value) {
    this.set_1(key, value.toString());
  };
  Object.defineProperty(AbstractApplicationSettings.prototype, 'hasUserConsent', {
    configurable: true,
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
    var tmp$;
    (tmp$ = this.ctnCookie_0.parentNode) != null ? tmp$.removeChild(this.ctnCookie_0) : null;
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
  HtmlHelper.prototype.getElementsByClassName_359kph$ = defineInlineFunction('group-randomizer.org.olafneumann.grouprandom.browser.HtmlHelper.getElementsByClassName_359kph$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var throwCCE = Kotlin.throwCCE;
    var RuntimeException_init = Kotlin.kotlin.RuntimeException;
    var ClassCastException = Kotlin.kotlin.ClassCastException;
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    return function (T_0, isT, className) {
      try {
        var collection = document.getElementsByClassName(className);
        var $receiver = until(0, collection.length);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var item = tmp$.next();
          var tmp$_0;
          destination.add_11rb$(isT(tmp$_0 = collection[item]) ? tmp$_0 : throwCCE());
        }
        return destination;
      } catch (e) {
        if (Kotlin.isType(e, ClassCastException)) {
          throw new RuntimeException_init("Unable to find elements with class name '" + className + "'.", e);
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
  function Group(name, members) {
    Group$Companion_getInstance();
    if (members === void 0) {
      members = ArrayList_init();
    }this.name = name;
    this.members = members;
  }
  function Group$Companion() {
    Group$Companion_instance = this;
  }
  Group$Companion.prototype.serializer = function () {
    return Group$$serializer_getInstance();
  };
  Group$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Group$Companion_instance = null;
  function Group$Companion_getInstance() {
    if (Group$Companion_instance === null) {
      new Group$Companion();
    }return Group$Companion_instance;
  }
  function Group$$serializer() {
    this.descriptor_k62ne3$_0 = new PluginGeneratedSerialDescriptor('org.olafneumann.grouprandom.model.Group', this, 2);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('members', true);
    Group$$serializer_instance = this;
  }
  Object.defineProperty(Group$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_k62ne3$_0;
    }
  });
  Group$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    if (!equals(value.members, ArrayList_init()) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeSerializableElement_r4qlx7$(this.descriptor, 1, new ArrayListSerializer(Member$$serializer_getInstance()), value.members);
    output.endStructure_24f42q$(this.descriptor);
  };
  Group$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeSerializableElement_12e8id$(this.descriptor, 1, new ArrayListSerializer(Member$$serializer_getInstance()), local1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Group_init(bitMask0, local0, local1, null);
  };
  Group$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, new ArrayListSerializer(Member$$serializer_getInstance())];
  };
  Group$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Group$$serializer_instance = null;
  function Group$$serializer_getInstance() {
    if (Group$$serializer_instance === null) {
      new Group$$serializer();
    }return Group$$serializer_instance;
  }
  function Group_init(seen1, name, members, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Group.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0) {
      $this.members = ArrayList_init();
    } else
      $this.members = members;
    return $this;
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
  Group.prototype.copy_tlkfet$ = function (name, members) {
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
    Member$Companion_getInstance();
    if (active === void 0)
      active = true;
    this.name = name;
    this.active = active;
  }
  function Member$Companion() {
    Member$Companion_instance = this;
  }
  Member$Companion.prototype.serializer = function () {
    return Member$$serializer_getInstance();
  };
  Member$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Member$Companion_instance = null;
  function Member$Companion_getInstance() {
    if (Member$Companion_instance === null) {
      new Member$Companion();
    }return Member$Companion_instance;
  }
  function Member$$serializer() {
    this.descriptor_435a1k$_0 = new PluginGeneratedSerialDescriptor('org.olafneumann.grouprandom.model.Member', this, 2);
    this.descriptor.addElement_ivxn3r$('name', false);
    this.descriptor.addElement_ivxn3r$('active', true);
    Member$$serializer_instance = this;
  }
  Object.defineProperty(Member$$serializer.prototype, 'descriptor', {
    configurable: true,
    get: function () {
      return this.descriptor_435a1k$_0;
    }
  });
  Member$$serializer.prototype.serialize_55azsf$ = function (encoder, value) {
    var output = encoder.beginStructure_24f42q$(this.descriptor);
    output.encodeStringElement_iij8qq$(this.descriptor, 0, value.name);
    if (!equals(value.active, true) || output.shouldEncodeElementDefault_szpzho$(this.descriptor, 1))
      output.encodeBooleanElement_qh7jdn$(this.descriptor, 1, value.active);
    output.endStructure_24f42q$(this.descriptor);
  };
  Member$$serializer.prototype.deserialize_bq71mq$ = function (decoder) {
    var index;
    var bitMask0 = 0;
    var local0
    , local1;
    var input = decoder.beginStructure_24f42q$(this.descriptor);
    loopLabel: while (true) {
      index = input.decodeElementIndex_24f42q$(this.descriptor);
      switch (index) {
        case 0:
          local0 = input.decodeStringElement_szpzho$(this.descriptor, 0);
          bitMask0 |= 1;
          break;
        case 1:
          local1 = input.decodeBooleanElement_szpzho$(this.descriptor, 1);
          bitMask0 |= 2;
          break;
        case -1:
          break loopLabel;
        default:throw new UnknownFieldException(index);
      }
    }
    input.endStructure_24f42q$(this.descriptor);
    return Member_init(bitMask0, local0, local1, null);
  };
  Member$$serializer.prototype.childSerializers = function () {
    return [internal.StringSerializer, internal.BooleanSerializer];
  };
  Member$$serializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: '$serializer',
    interfaces: [GeneratedSerializer]
  };
  var Member$$serializer_instance = null;
  function Member$$serializer_getInstance() {
    if (Member$$serializer_instance === null) {
      new Member$$serializer();
    }return Member$$serializer_instance;
  }
  function Member_init(seen1, name, active, serializationConstructorMarker) {
    var $this = serializationConstructorMarker || Object.create(Member.prototype);
    if ((seen1 & 1) === 0)
      throw new MissingFieldException('name');
    else
      $this.name = name;
    if ((seen1 & 2) === 0)
      $this.active = true;
    else
      $this.active = active;
    return $this;
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
  function HtmlView(controller) {
    HtmlView$Companion_getInstance();
    this.controller_0 = controller;
    var id = HtmlView$Companion_getInstance().ID_LIST_EXISTING_GROUPS_0;
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
    var id_0 = HtmlView$Companion_getInstance().ID_INPUT_NEW_GROUP_NAME_0;
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
    this.inputAddGroupName_0 = getElementById_359kph$result_0;
    var id_1 = HtmlView$Companion_getInstance().ID_LIST_EXISTING_MEMBERS_0;
    var getElementById_359kph$result_1;
    var tmp$_1;
    try {
      getElementById_359kph$result_1 = Kotlin.isType(tmp$_1 = document.getElementById(id_1), HTMLDivElement) ? tmp$_1 : throwCCE();
    } catch (e_1) {
      if (Kotlin.isType(e_1, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_1 + "'.", e_1);
      } else
        throw e_1;
    }
    this.divListGroupMembers_0 = getElementById_359kph$result_1;
    var id_2 = HtmlView$Companion_getInstance().ID_INPUT_NEW_MEMBER_NAME_0;
    var getElementById_359kph$result_2;
    var tmp$_2;
    try {
      getElementById_359kph$result_2 = Kotlin.isType(tmp$_2 = document.getElementById(id_2), HTMLInputElement) ? tmp$_2 : throwCCE();
    } catch (e_2) {
      if (Kotlin.isType(e_2, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_2 + "'.", e_2);
      } else
        throw e_2;
    }
    this.inputAddGroupMember_0 = getElementById_359kph$result_2;
    var id_3 = HtmlView$Companion_getInstance().ID_BUTTON_ADD_GROUP_MEMBER_0;
    var getElementById_359kph$result_3;
    var tmp$_3;
    try {
      getElementById_359kph$result_3 = Kotlin.isType(tmp$_3 = document.getElementById(id_3), HTMLButtonElement) ? tmp$_3 : throwCCE();
    } catch (e_3) {
      if (Kotlin.isType(e_3, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_3 + "'.", e_3);
      } else
        throw e_3;
    }
    this.buttonAddGroupMember_0 = getElementById_359kph$result_3;
    var id_4 = HtmlView$Companion_getInstance().ID_SELECTED_MEMBER_COUNTER_0;
    var getElementById_359kph$result_4;
    var tmp$_4;
    try {
      getElementById_359kph$result_4 = Kotlin.isType(tmp$_4 = document.getElementById(id_4), HTMLSpanElement) ? tmp$_4 : throwCCE();
    } catch (e_4) {
      if (Kotlin.isType(e_4, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_4 + "'.", e_4);
      } else
        throw e_4;
    }
    this.spanSelectedMemberCounter_0 = getElementById_359kph$result_4;
    var id_5 = HtmlView$Companion_getInstance().ID_DIV_LIST_PREFIXES_0;
    var getElementById_359kph$result_5;
    var tmp$_5;
    try {
      getElementById_359kph$result_5 = Kotlin.isType(tmp$_5 = document.getElementById(id_5), HTMLDivElement) ? tmp$_5 : throwCCE();
    } catch (e_5) {
      if (Kotlin.isType(e_5, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_5 + "'.", e_5);
      } else
        throw e_5;
    }
    this.divListPrefixes_0 = getElementById_359kph$result_5;
    var id_6 = HtmlView$Companion_getInstance().ID_DIV_LIST_SEPARATORS_0;
    var getElementById_359kph$result_6;
    var tmp$_6;
    try {
      getElementById_359kph$result_6 = Kotlin.isType(tmp$_6 = document.getElementById(id_6), HTMLDivElement) ? tmp$_6 : throwCCE();
    } catch (e_6) {
      if (Kotlin.isType(e_6, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_6 + "'.", e_6);
      } else
        throw e_6;
    }
    this.divListSeparators_0 = getElementById_359kph$result_6;
    var id_7 = HtmlView$Companion_getInstance().ID_DIV_LIST_POSTFIXES_0;
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
    this.divListPostfixes_0 = getElementById_359kph$result_7;
    var id_8 = HtmlView$Companion_getInstance().ID_INPUT_PREFIX_0;
    var getElementById_359kph$result_8;
    var tmp$_8;
    try {
      getElementById_359kph$result_8 = Kotlin.isType(tmp$_8 = document.getElementById(id_8), HTMLInputElement) ? tmp$_8 : throwCCE();
    } catch (e_8) {
      if (Kotlin.isType(e_8, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_8 + "'.", e_8);
      } else
        throw e_8;
    }
    this.inputPrefix_0 = getElementById_359kph$result_8;
    var id_9 = HtmlView$Companion_getInstance().ID_INPUT_SEPARATOR_0;
    var getElementById_359kph$result_9;
    var tmp$_9;
    try {
      getElementById_359kph$result_9 = Kotlin.isType(tmp$_9 = document.getElementById(id_9), HTMLInputElement) ? tmp$_9 : throwCCE();
    } catch (e_9) {
      if (Kotlin.isType(e_9, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_9 + "'.", e_9);
      } else
        throw e_9;
    }
    this.inputSeparator_0 = getElementById_359kph$result_9;
    var id_10 = HtmlView$Companion_getInstance().ID_INPUT_POSTFIX_0;
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
    this.inputPostfix_0 = getElementById_359kph$result_10;
    var id_11 = HtmlView$Companion_getInstance().ID_DIV_RESULT_TEXT_0;
    var getElementById_359kph$result_11;
    var tmp$_11;
    try {
      getElementById_359kph$result_11 = Kotlin.isType(tmp$_11 = document.getElementById(id_11), HTMLDivElement) ? tmp$_11 : throwCCE();
    } catch (e_11) {
      if (Kotlin.isType(e_11, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_11 + "'.", e_11);
      } else
        throw e_11;
    }
    this.divResultText_0 = getElementById_359kph$result_11;
    this.currentRandomText_0 = '';
    var tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16;
    var id_12 = HtmlView$Companion_getInstance().ID_BUTTON_NEW_GROUP_0;
    var getElementById_359kph$result_12;
    var tmp$_17;
    try {
      getElementById_359kph$result_12 = Kotlin.isType(tmp$_17 = document.getElementById(id_12), HTMLButtonElement) ? tmp$_17 : throwCCE();
    } catch (e_12) {
      if (Kotlin.isType(e_12, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_12 + "'.", e_12);
      } else
        throw e_12;
    }
    var buttonAddGroup = getElementById_359kph$result_12;
    var id_13 = HtmlView$Companion_getInstance().ID_BUTTON_NEW_PREFIX_0;
    var getElementById_359kph$result_13;
    var tmp$_18;
    try {
      getElementById_359kph$result_13 = Kotlin.isType(tmp$_18 = document.getElementById(id_13), HTMLButtonElement) ? tmp$_18 : throwCCE();
    } catch (e_13) {
      if (Kotlin.isType(e_13, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_13 + "'.", e_13);
      } else
        throw e_13;
    }
    var buttonAddPrefix = getElementById_359kph$result_13;
    var id_14 = HtmlView$Companion_getInstance().ID_BUTTON_NEW_SEPARATOR_0;
    var getElementById_359kph$result_14;
    var tmp$_19;
    try {
      getElementById_359kph$result_14 = Kotlin.isType(tmp$_19 = document.getElementById(id_14), HTMLButtonElement) ? tmp$_19 : throwCCE();
    } catch (e_14) {
      if (Kotlin.isType(e_14, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_14 + "'.", e_14);
      } else
        throw e_14;
    }
    var buttonAddSeparator = getElementById_359kph$result_14;
    var id_15 = HtmlView$Companion_getInstance().ID_BUTTON_NEW_POSTFIX_0;
    var getElementById_359kph$result_15;
    var tmp$_20;
    try {
      getElementById_359kph$result_15 = Kotlin.isType(tmp$_20 = document.getElementById(id_15), HTMLButtonElement) ? tmp$_20 : throwCCE();
    } catch (e_15) {
      if (Kotlin.isType(e_15, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_15 + "'.", e_15);
      } else
        throw e_15;
    }
    var buttonAddPostfix = getElementById_359kph$result_15;
    var createGroupCallback = HtmlView$Companion_getInstance().createValueCallback_0(this.inputAddGroupName_0, HtmlView_init$lambda(this));
    var addMemberToGroupCallback = HtmlView$Companion_getInstance().createValueCallback_0(this.inputAddGroupMember_0, HtmlView_init$lambda_0(this));
    var createPrefixCallback = HtmlView$Companion_getInstance().createValueCallback_0(this.inputPrefix_0, HtmlView_init$lambda_1(this));
    var createSeparatorCallback = HtmlView$Companion_getInstance().createValueCallback_0(this.inputSeparator_0, HtmlView_init$lambda_2(this));
    var createPostfixCallback = HtmlView$Companion_getInstance().createValueCallback_0(this.inputPostfix_0, HtmlView_init$lambda_3(this));
    HtmlView$Companion_getInstance().addClickListener_0(buttonAddGroup, createGroupCallback);
    (tmp$_12 = HtmlView$Companion_getInstance().get_parentForm_0(buttonAddGroup)) != null ? (HtmlView$Companion_getInstance().addSubmitListener_0(tmp$_12, createGroupCallback), Unit) : null;
    HtmlView$Companion_getInstance().addClickListener_0(this.buttonAddGroupMember_0, addMemberToGroupCallback);
    (tmp$_13 = HtmlView$Companion_getInstance().get_parentForm_0(this.buttonAddGroupMember_0)) != null ? (HtmlView$Companion_getInstance().addSubmitListener_0(tmp$_13, addMemberToGroupCallback), Unit) : null;
    HtmlView$Companion_getInstance().addClickListener_0(buttonAddPrefix, createPrefixCallback);
    (tmp$_14 = HtmlView$Companion_getInstance().get_parentForm_0(buttonAddPrefix)) != null ? (HtmlView$Companion_getInstance().addSubmitListener_0(tmp$_14, createPrefixCallback), Unit) : null;
    HtmlView$Companion_getInstance().addClickListener_0(buttonAddSeparator, createSeparatorCallback);
    (tmp$_15 = HtmlView$Companion_getInstance().get_parentForm_0(buttonAddSeparator)) != null ? (HtmlView$Companion_getInstance().addSubmitListener_0(tmp$_15, createSeparatorCallback), Unit) : null;
    HtmlView$Companion_getInstance().addClickListener_0(buttonAddPostfix, createPostfixCallback);
    (tmp$_16 = HtmlView$Companion_getInstance().get_parentForm_0(buttonAddPostfix)) != null ? (HtmlView$Companion_getInstance().addSubmitListener_0(tmp$_16, createPostfixCallback), Unit) : null;
    var id_16 = HtmlView$Companion_getInstance().ID_BUTTON_REGENERATE_0;
    var getElementById_359kph$result_16;
    var tmp$_21;
    try {
      getElementById_359kph$result_16 = Kotlin.isType(tmp$_21 = document.getElementById(id_16), HTMLButtonElement) ? tmp$_21 : throwCCE();
    } catch (e_16) {
      if (Kotlin.isType(e_16, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_16 + "'.", e_16);
      } else
        throw e_16;
    }
    getElementById_359kph$result_16.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK_0, HtmlView_init$lambda_4(this));
    var className = HtmlView$Companion_getInstance().CLASS_COPY_BUTTON_0;
    try {
      var collection = document.getElementsByClassName(className);
      var $receiver = until(0, collection.length);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_22;
      tmp$_22 = $receiver.iterator();
      while (tmp$_22.hasNext()) {
        var item = tmp$_22.next();
        var tmp$_23;
        destination.add_11rb$(Kotlin.isType(tmp$_23 = collection[item], HTMLButtonElement) ? tmp$_23 : throwCCE());
      }
    } catch (e_17) {
      if (Kotlin.isType(e_17, ClassCastException)) {
        throw new RuntimeException_init("Unable to find elements with class name '" + className + "'.", e_17);
      } else
        throw e_17;
    }
    var tmp$_24;
    tmp$_24 = destination.iterator();
    while (tmp$_24.hasNext()) {
      var element = tmp$_24.next();
      element.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK_0, HtmlView_init$lambda$lambda(this));
    }
    window.addEventListener(HtmlView$Companion_getInstance().EVENT_POPSTATE_0, HtmlView_init$lambda_5(this));
    var id_17 = HtmlView$Companion_getInstance().ID_SELECTED_ALL_MEMBERS_0;
    var getElementById_359kph$result_17;
    var tmp$_25;
    try {
      getElementById_359kph$result_17 = Kotlin.isType(tmp$_25 = document.getElementById(id_17), HTMLAnchorElement) ? tmp$_25 : throwCCE();
    } catch (e_18) {
      if (Kotlin.isType(e_18, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_17 + "'.", e_18);
      } else
        throw e_18;
    }
    getElementById_359kph$result_17.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK_0, HtmlView_init$lambda_6(this));
    var id_18 = HtmlView$Companion_getInstance().ID_DESELECTED_ALL_MEMBERS_0;
    var getElementById_359kph$result_18;
    var tmp$_26;
    try {
      getElementById_359kph$result_18 = Kotlin.isType(tmp$_26 = document.getElementById(id_18), HTMLAnchorElement) ? tmp$_26 : throwCCE();
    } catch (e_19) {
      if (Kotlin.isType(e_19, ClassCastException)) {
        throw new RuntimeException_init("Unable to find element with id '" + id_18 + "'.", e_19);
      } else
        throw e_19;
    }
    getElementById_359kph$result_18.addEventListener(HtmlView$Companion_getInstance().EVENT_CLICK_0, HtmlView_init$lambda_7(this));
    this.groupListMaintainer_0 = new ListMaintainer(this.divListGroups_0, HtmlView$groupListMaintainer$lambda(this), HtmlView$groupListMaintainer$lambda_0);
    this.memberListMaintainer_0 = new ListMaintainer(this.divListGroupMembers_0, HtmlView$memberListMaintainer$lambda(this), HtmlView$memberListMaintainer$lambda_0);
    this.prefixListMaintainer_0 = new ListMaintainer(this.divListPrefixes_0, HtmlView$prefixListMaintainer$lambda(this));
    this.separatorListMaintainer_0 = new ListMaintainer(this.divListSeparators_0, HtmlView$separatorListMaintainer$lambda(this));
    this.postfixListMaintainer_0 = new ListMaintainer(this.divListPostfixes_0, HtmlView$postfixListMaintainer$lambda(this));
  }
  HtmlView.prototype.selectPreselectedGroup = function () {
    var url = new URL(document.URL);
    if (url.hash.length > 1) {
      var groupName = decodeURIComponent(url.hash.substring(1));
      this.controller_0.tryToSelectGroupByName_61zpoe$(groupName);
      return true;
    }return false;
  };
  HtmlView.prototype.focusNewGroupEditor = function () {
    this.inputAddGroupName_0.focus();
  };
  HtmlView.prototype.focusNewMemberEditor = function () {
    this.inputAddGroupMember_0.focus();
  };
  HtmlView.prototype.focusNewPrefix = function () {
    this.inputPrefix_0.focus();
  };
  HtmlView.prototype.focusNewSeparator = function () {
    this.inputSeparator_0.focus();
  };
  HtmlView.prototype.focusNewPostfix = function () {
    this.inputPostfix_0.focus();
  };
  HtmlView.prototype.showGroups_hgjbqt$ = function (groups) {
    this.groupListMaintainer_0.showItems_4ezy5m$(groups);
  };
  HtmlView.prototype.showMembers_x6m2tk$ = function (members) {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this.divListGroupMembers_0.parentElement) != null ? tmp$.classList : null) != null ? tmp$_0.toggle(HtmlView$Companion_getInstance().CLASS_HIDE_GROUP_MEMBERS_0, members.isEmpty()) : null;
    this.memberListMaintainer_0.showItems_4ezy5m$(members);
    var tmp$_1 = this.spanSelectedMemberCounter_0;
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = members.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (element.active)
        destination.add_11rb$(element);
    }
    tmp$_1.innerText = destination.size.toString();
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
  HtmlView.prototype.selectGroup_u2lxnd$ = function (group) {
    var tmp$;
    this.groupListMaintainer_0.toggleActive_11rb$(group);
    var hash = (tmp$ = group != null ? group.name : null) != null ? tmp$ : '';
    var state = window.history.state;
    if (state == null || state.name != hash) {
      window.history.pushState(group, hash, '#' + encodeURIComponent(hash));
    }this.buttonAddGroupMember_0.disabled = group == null;
    this.inputAddGroupMember_0.disabled = group == null;
  };
  HtmlView.prototype.selectPrefix_pdl1vj$ = function (prefix) {
    this.prefixListMaintainer_0.toggleActive_11rb$(prefix);
  };
  HtmlView.prototype.selectSeparator_pdl1vj$ = function (separator) {
    this.separatorListMaintainer_0.toggleActive_11rb$(separator);
  };
  HtmlView.prototype.selectPostfix_pdl1vj$ = function (postfix) {
    this.postfixListMaintainer_0.toggleActive_11rb$(postfix);
  };
  HtmlView.prototype.showGeneratedText_61zpoe$ = function (text) {
    this.currentRandomText_0 = text;
    this.divResultText_0.innerText = HtmlView$Companion_getInstance().toNonBreaking_0(this.currentRandomText_0);
  };
  function HtmlView$createGroupItem$lambda$lambda(this$HtmlView, closure$group) {
    return function (it) {
      this$HtmlView.controller_0.selectGroup_u2lxnd$(closure$group);
      return Unit;
    };
  }
  function HtmlView$createGroupItem$lambda$lambda$lambda$lambda(closure$group, this$HtmlView) {
    return function (event) {
      if (window.confirm("Do you really want to delete group '" + closure$group.name + "'?")) {
        this$HtmlView.controller_0.removeGroup_f2hml6$(closure$group);
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
    return visitTagAndFinalize(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', 'list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container']), $receiver), $receiver, visitAndFinalize$lambda(HtmlView$createGroupItem$lambda(group, this)));
  };
  function HtmlView$createMemberItem$lambda$lambda$lambda(this$HtmlView, closure$member) {
    return function (it) {
      this$HtmlView.controller_0.toggleGroupMemberActive_wpoo0j$(closure$member);
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
        this$HtmlView.controller_0.removeGroupMember_wpoo0j$(closure$member);
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
  function HtmlView$createTextItem$lambda$lambda(closure$text) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$(HtmlView$Companion_getInstance().toNonBreaking_0(closure$text));
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
  function HtmlView$createTextItem$lambda_1(closure$onSelectFunction, closure$text, closure$onDeleteFunction) {
    return function ($receiver) {
      set_onClickFunction($receiver, closure$onSelectFunction);
      var classes = 'ml-2 gr-bg-light-grey rounded px-1 text-monospace';
      var block = HtmlView$createTextItem$lambda$lambda(closure$text);
      visitTag(new DIV_init(attributesMapOf_0('class', classes), $receiver.consumer), visit$lambda_1(block));
      var classes_0 = 'gr-action-link ml-1';
      var block_0 = HtmlView$createTextItem$lambda$lambda_0(closure$text, closure$onDeleteFunction);
      visitTag(new A_init(attributesMapOf(['href', null, 'target', null, 'class', classes_0]), $receiver.consumer), visit$lambda(block_0));
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
    return visitTagAndFinalize(new BUTTON_init(attributesMapOf(['formenctype', null != null ? enumEncode(null) : null, 'formmethod', null != null ? enumEncode(null) : null, 'name', null, 'type', type != null ? enumEncode(type) : null, 'class', 'list-group-item list-group-item-action d-flex justify-content-between gr-action-link-container']), $receiver), $receiver, visitAndFinalize$lambda(HtmlView$createTextItem$lambda_1(onSelectFunction, text, onDeleteFunction)));
  };
  HtmlView.prototype.getBadgeClass_0 = function ($receiver) {
    return $receiver.active ? 'badge-success' : 'badge-danger';
  };
  HtmlView.prototype.getIconText_0 = function ($receiver) {
    return $receiver.active ? '\u2713' : '\u2715';
  };
  function HtmlView$Companion() {
    HtmlView$Companion_instance = this;
    this.CHAR_NON_BREAKING_SPACE_0 = '\xA0';
    this.CHAR_ZERO_WIDTH_BREAKING_SPACE_0 = '\uFEFF';
    this.CLASS_COPY_BUTTON_0 = 'gr-copy-button';
    this.CLASS_HIDE_GROUP_MEMBERS_0 = 'gr-existing-members-hide';
    this.EVENT_CLICK_0 = 'click';
    this.EVENT_SUBMIT_0 = 'submit';
    this.EVENT_POPSTATE_0 = 'popstate';
    this.ID_LIST_EXISTING_GROUPS_0 = 'gr_existing_groups';
    this.ID_INPUT_NEW_GROUP_NAME_0 = 'gr_new_group_name';
    this.ID_BUTTON_NEW_GROUP_0 = 'gr_create_new_group';
    this.ID_LIST_EXISTING_MEMBERS_0 = 'gr_existing_members';
    this.ID_INPUT_NEW_MEMBER_NAME_0 = 'gr_new_member_name';
    this.ID_BUTTON_ADD_GROUP_MEMBER_0 = 'gr_add_group_member';
    this.ID_SELECTED_MEMBER_COUNTER_0 = 'gr_selected_member_counter';
    this.ID_SELECTED_ALL_MEMBERS_0 = 'gr_select_all_members';
    this.ID_DESELECTED_ALL_MEMBERS_0 = 'gr_deselect_all_members';
    this.ID_DIV_LIST_PREFIXES_0 = 'gr_div_list_prefixes';
    this.ID_DIV_LIST_SEPARATORS_0 = 'gr_div_list_separators';
    this.ID_DIV_LIST_POSTFIXES_0 = 'gr_div_list_postfixes';
    this.ID_INPUT_PREFIX_0 = 'gr_input_prefix';
    this.ID_INPUT_SEPARATOR_0 = 'gr_input_separator';
    this.ID_INPUT_POSTFIX_0 = 'gr_input_postfix';
    this.ID_BUTTON_NEW_PREFIX_0 = 'gr_create_new_prefix';
    this.ID_BUTTON_NEW_SEPARATOR_0 = 'gr_create_new_separator';
    this.ID_BUTTON_NEW_POSTFIX_0 = 'gr_create_new_postfix';
    this.ID_DIV_RESULT_TEXT_0 = 'gr_result_text';
    this.ID_BUTTON_REGENERATE_0 = 'gr_btn_regenerate';
    this.REGEX_WHITESPACE_0 = Regex_init('\\s');
  }
  function HtmlView$Companion$createValueCallback$lambda(closure$consumer, this$createValueCallback) {
    return function (it) {
      closure$consumer(this$createValueCallback.value);
      this$createValueCallback.value = '';
      return Unit;
    };
  }
  HtmlView$Companion.prototype.createValueCallback_0 = function ($receiver, consumer) {
    return HtmlView$Companion$createValueCallback$lambda(consumer, $receiver);
  };
  HtmlView$Companion.prototype.get_parentForm_0 = function ($receiver) {
    var tmp$, tmp$_0;
    if ($receiver.parentElement == null || equals($receiver.parentElement, document)) {
      return null;
    }if (Kotlin.isType($receiver.parentElement, HTMLFormElement)) {
      return Kotlin.isType(tmp$ = $receiver.parentElement, HTMLFormElement) ? tmp$ : throwCCE();
    }return (tmp$_0 = $receiver.parentElement) != null ? this.get_parentForm_0(tmp$_0) : null;
  };
  HtmlView$Companion.prototype.toNonBreaking_0 = function ($receiver) {
    var tmp$;
    if ($receiver.length === 0)
      tmp$ = this.CHAR_ZERO_WIDTH_BREAKING_SPACE_0;
    else {
      var regex = this.REGEX_WHITESPACE_0;
      var replacement = this.CHAR_NON_BREAKING_SPACE_0;
      tmp$ = regex.replace_x2uqeu$($receiver, replacement);
    }
    return tmp$;
  };
  HtmlView$Companion.prototype.addClickListener_0 = function ($receiver, handler) {
    $receiver.addEventListener(this.EVENT_CLICK_0, handler);
  };
  HtmlView$Companion.prototype.addSubmitListener_0 = function ($receiver, handler) {
    $receiver.addEventListener(this.EVENT_SUBMIT_0, handler);
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
      this$HtmlView.controller_0.addGroup_61zpoe$(it);
      return Unit;
    };
  }
  function HtmlView_init$lambda_0(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.addGroupMember_61zpoe$(it);
      return Unit;
    };
  }
  function HtmlView_init$lambda_1(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.addPrefix_61zpoe$(it);
      return Unit;
    };
  }
  function HtmlView_init$lambda_2(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.addSeparator_61zpoe$(it);
      return Unit;
    };
  }
  function HtmlView_init$lambda_3(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.addPostfix_61zpoe$(it);
      return Unit;
    };
  }
  function HtmlView_init$lambda_4(this$HtmlView) {
    return function (it) {
      this$HtmlView.controller_0.generateRandomOrder();
      return Unit;
    };
  }
  function HtmlView_init$lambda$lambda(this$HtmlView) {
    return function (it) {
      navigator.clipboard.writeText(this$HtmlView.currentRandomText_0);
      return Unit;
    };
  }
  function HtmlView_init$lambda_5(this$HtmlView) {
    return function (it) {
      var tmp$;
      if (Kotlin.isType(it, PopStateEvent)) {
        if (it.state != null) {
          var dynamicGroup = it.state;
          var groupName = typeof (tmp$ = dynamicGroup.name) === 'string' ? tmp$ : throwCCE();
          if (groupName != null) {
            this$HtmlView.controller_0.tryToSelectGroupByName_61zpoe$(groupName);
          }}}return Unit;
    };
  }
  function HtmlView_init$lambda_6(this$HtmlView) {
    return function (it) {
      it.stopPropagation();
      this$HtmlView.controller_0.setAllGroupMembers_6taknv$(true);
      return Unit;
    };
  }
  function HtmlView_init$lambda_7(this$HtmlView) {
    return function (it) {
      it.stopPropagation();
      this$HtmlView.controller_0.setAllGroupMembers_6taknv$(false);
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
  function HtmlView$prefixListMaintainer$lambda$lambda_0(closure$it, this$HtmlView) {
    return function (event) {
      if (window.confirm("Remove prefix '" + closure$it + "'?")) {
        this$HtmlView.controller_0.removePrefix_61zpoe$(closure$it);
      }event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$prefixListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createTextItem_0(it, HtmlView$prefixListMaintainer$lambda$lambda(this$HtmlView, it), HtmlView$prefixListMaintainer$lambda$lambda_0(it, this$HtmlView));
    };
  }
  function HtmlView$separatorListMaintainer$lambda$lambda(this$HtmlView, closure$it) {
    return function (event) {
      this$HtmlView.controller_0.selectSeparator_61zpoe$(closure$it);
      event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$separatorListMaintainer$lambda$lambda_0(closure$it, this$HtmlView) {
    return function (event) {
      if (window.confirm("Remove separator '" + closure$it + "'?")) {
        this$HtmlView.controller_0.removeSeparator_61zpoe$(closure$it);
      }event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$separatorListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createTextItem_0(it, HtmlView$separatorListMaintainer$lambda$lambda(this$HtmlView, it), HtmlView$separatorListMaintainer$lambda$lambda_0(it, this$HtmlView));
    };
  }
  function HtmlView$postfixListMaintainer$lambda$lambda(this$HtmlView, closure$it) {
    return function (event) {
      this$HtmlView.controller_0.selectPostfix_61zpoe$(closure$it);
      event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$postfixListMaintainer$lambda$lambda_0(closure$it, this$HtmlView) {
    return function (event) {
      if (window.confirm("Remove postfix '" + closure$it + "'?")) {
        this$HtmlView.controller_0.removePostfix_61zpoe$(closure$it);
      }event.stopPropagation();
      return Unit;
    };
  }
  function HtmlView$postfixListMaintainer$lambda(this$HtmlView) {
    return function (it) {
      return this$HtmlView.createTextItem_0(it, HtmlView$postfixListMaintainer$lambda$lambda(this$HtmlView, it), HtmlView$postfixListMaintainer$lambda$lambda_0(it, this$HtmlView));
    };
  }
  HtmlView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlView',
    interfaces: [DisplayContract$View]
  };
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function ListMaintainer(parent, elementCreator, selector) {
    if (selector === void 0)
      selector = ListMaintainer_init$lambda;
    this.parent_0 = parent;
    this.elementCreator_0 = elementCreator;
    this.selector_0 = selector;
    this.elements_0 = emptyMap();
  }
  function ListMaintainer$showItems$lambda(this$ListMaintainer) {
    return function (it) {
      return this$ListMaintainer.shouldBeRemoved_0(it);
    };
  }
  function ListMaintainer$showItems$lambda_0(this$ListMaintainer) {
    return function (it) {
      return this$ListMaintainer.selector_0(it);
    };
  }
  ListMaintainer.prototype.showItems_4ezy5m$ = function (items) {
    this.removeChildren_0(this.parent_0, ListMaintainer$showItems$lambda(this));
    var $receiver = reversed(sortedWith(items, new Comparator(compareBy$lambda(ListMaintainer$showItems$lambda_0(this)))));
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, this.elementCreator_0(item)));
    }
    this.elements_0 = toMap(destination);
    var tmp$_0;
    tmp$_0 = this.elements_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      this.parent_0.prepend(element.value);
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
  ListMaintainer.prototype.toggleActive_11rb$ = function (item) {
    var tmp$;
    tmp$ = this.elements_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      element.value.classList.toggle('active', item != null && equals(element.key, item));
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
  $$importsForInline$$['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'] = $module$kotlinx_serialization_kotlinx_serialization_core_jsLegacy;
  var package$org = _.org || (_.org = {});
  var package$olafneumann = package$org.olafneumann || (package$org.olafneumann = {});
  var package$grouprandom = package$olafneumann.grouprandom || (package$olafneumann.grouprandom = {});
  Object.defineProperty(package$grouprandom, 'ApplicationSettings', {
    get: ApplicationSettings_getInstance
  });
  DisplayContract.View = DisplayContract$View;
  DisplayContract.Controller = DisplayContract$Controller;
  package$grouprandom.DisplayContract = DisplayContract;
  package$grouprandom.main = main;
  $$importsForInline$$['group-randomizer'] = _;
  Object.defineProperty(UiController, 'Companion', {
    get: UiController$Companion_getInstance
  });
  package$grouprandom.UiController = UiController;
  Object.defineProperty(AbstractApplicationSettings, 'Companion', {
    get: AbstractApplicationSettings$Companion_getInstance
  });
  var package$browser = package$grouprandom.browser || (package$grouprandom.browser = {});
  package$browser.AbstractApplicationSettings = AbstractApplicationSettings;
  Object.defineProperty(package$browser, 'CookieBanner', {
    get: CookieBanner_getInstance
  });
  Object.defineProperty(package$browser, 'HtmlHelper', {
    get: HtmlHelper_getInstance
  });
  Object.defineProperty(Group, 'Companion', {
    get: Group$Companion_getInstance
  });
  Object.defineProperty(Group, '$serializer', {
    get: Group$$serializer_getInstance
  });
  var package$model = package$grouprandom.model || (package$grouprandom.model = {});
  package$model.Group_init_1fvk56$ = Group_init;
  package$model.Group = Group;
  Object.defineProperty(Member, 'Companion', {
    get: Member$Companion_getInstance
  });
  Object.defineProperty(Member, '$serializer', {
    get: Member$$serializer_getInstance
  });
  package$model.Member_init_8psgup$ = Member_init;
  package$model.Member = Member;
  $$importsForInline$$['kotlinx-html-js'] = $module$kotlinx_html_js;
  Object.defineProperty(HtmlView, 'Companion', {
    get: HtmlView$Companion_getInstance
  });
  var package$ui = package$grouprandom.ui || (package$grouprandom.ui = {});
  package$ui.HtmlView = HtmlView;
  package$ui.ListMaintainer = ListMaintainer;
  Group$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  Member$$serializer.prototype.typeParametersSerializers = GeneratedSerializer.prototype.typeParametersSerializers;
  main();
  Kotlin.defineModule('group-randomizer', _);
  return _;
}(typeof this['group-randomizer'] === 'undefined' ? {} : this['group-randomizer'], kotlin, this['kotlinx-serialization-kotlinx-serialization-json-jsLegacy'], this['kotlinx-serialization-kotlinx-serialization-core-jsLegacy'], this['kotlinx-html-js']);

//# sourceMappingURL=group-randomizer.js.map
