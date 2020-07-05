if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'group-randomizer'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'group-randomizer'.");
}this['group-randomizer'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toBoolean = Kotlin.kotlin.text.toBoolean_pdl1vz$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException;
  var ClassCastException = Kotlin.kotlin.ClassCastException;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  function main(args) {
    window.alert('Hello, World!');
  }
  function ApplicationSettings() {
    ApplicationSettings_instance = this;
    this.KEY_CONSENT_0 = 'consent';
    this.KEY_COMBINER_OPTIONS_0 = 'combiner.options';
    this.KEY_LAST_VERSION_0 = 'user.lastVersion';
    this.VAL_VERSION_0 = 3;
    this.intermediate_0 = LinkedHashMap_init();
    if (!this.hasUserConsent) {
      this.loadIntermediateFromLocalStorage_0();
      localStorage.clear();
    }}
  ApplicationSettings.prototype.persistIntermediate_0 = function () {
    var tmp$;
    tmp$ = this.intermediate_0.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.set_0(element.key, element.value);
    }
    this.intermediate_0.clear();
  };
  ApplicationSettings.prototype.loadIntermediateFromLocalStorage_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = localStorage.length;
    for (var i = 0; i < tmp$; i++) {
      if ((tmp$_0 = localStorage.key(i)) != null) {
        var tmp$_1;
        if ((tmp$_1 = localStorage.getItem(tmp$_0)) != null) {
          this.intermediate_0.put_xwzc9p$(tmp$_0, tmp$_1);
        }}}
  };
  ApplicationSettings.prototype.get_0 = function (key) {
    var tmp$;
    return (tmp$ = this.intermediate_0.get_11rb$(key)) != null ? tmp$ : localStorage.getItem(key);
  };
  ApplicationSettings.prototype.set_0 = function (key, value) {
    if (this.hasUserConsent) {
      localStorage.setItem(key, value);
    } else {
      this.intermediate_0.put_xwzc9p$(key, value);
    }
  };
  ApplicationSettings.prototype.set_1 = function (key, value) {
    this.set_0(key, value.toString());
  };
  ApplicationSettings.prototype.set_2 = function (key, value) {
    this.set_0(key, value.toString());
  };
  ApplicationSettings.prototype.isNewUser = function () {
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = this.get_0(this.KEY_LAST_VERSION_0)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : 0) < 3;
  };
  ApplicationSettings.prototype.storeUserLastInfo = function () {
    this.set_1(this.KEY_LAST_VERSION_0, 3);
  };
  Object.defineProperty(ApplicationSettings.prototype, 'hasUserConsent', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.get_0(this.KEY_CONSENT_0)) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
    },
    set: function (value) {
      this.set_2(this.KEY_CONSENT_0, value);
      if (value) {
        this.persistIntermediate_0();
      } else {
        this.loadIntermediateFromLocalStorage_0();
      }
    }
  });
  ApplicationSettings.prototype.toLanguageExpandedProperty_0 = function (language) {
    return 'language.' + language + '.expanded';
  };
  ApplicationSettings.prototype.isLanguageExpanded_61zpoe$ = function (language) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.get_0(this.toLanguageExpandedProperty_0(language))) != null ? toBoolean(tmp$) : null) != null ? tmp$_0 : false;
  };
  ApplicationSettings.prototype.setLanguageExpanded_ivxn3r$ = function (language, expanded) {
    this.set_2(this.toLanguageExpandedProperty_0(language), expanded);
  };
  ApplicationSettings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ApplicationSettings',
    interfaces: []
  };
  var ApplicationSettings_instance = null;
  function ApplicationSettings_getInstance() {
    if (ApplicationSettings_instance === null) {
      new ApplicationSettings();
    }return ApplicationSettings_instance;
  }
  function CookieBanner() {
    CookieBanner_instance = this;
    this.ID_DIV_COOKIE_0 = 'rg_container_cookie';
    this.ID_BTN_ACCEPT_0 = 'rg_btn_cookie_accept';
    this.ID_BTN_REJECT_0 = 'rg_btn_cookie_reject';
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
  var package$org = _.org || (_.org = {});
  var package$olafneumann = package$org.olafneumann || (package$org.olafneumann = {});
  package$olafneumann.main_kand9s$ = main;
  var package$grouprandom = package$olafneumann.grouprandom || (package$olafneumann.grouprandom = {});
  var package$browser = package$grouprandom.browser || (package$grouprandom.browser = {});
  Object.defineProperty(package$browser, 'ApplicationSettings', {
    get: ApplicationSettings_getInstance
  });
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
  main([]);
  Kotlin.defineModule('group-randomizer', _);
  return _;
}(typeof this['group-randomizer'] === 'undefined' ? {} : this['group-randomizer'], kotlin);

//# sourceMappingURL=group-randomizer.js.map
