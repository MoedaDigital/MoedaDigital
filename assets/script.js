(function($) {
  var $window = $(window);
  var $document = $(document);

  var config = {
    startOnLoad:false,
    flowchart:{
      useMaxWidth:false,
    }
  };

  mermaid.initialize(config);
 /*
  * flatdoc:ready
  */
  $document.on('flatdoc:ready', function() {

	//hide xml examples unless it's explicitly requested
	if(location.search !== "?xml"){
		$(".lang-html").hide();
	}	
	 //hide the spinner
  $(".spinner-container").hide();
	 //Anchor jump links.
  $('.menu a').anchorjump();
  $('a[href^="http"]').not(".menu").attr('target', '_blank');

	//Scrollspy.
  $("h2").scrollagent(function(cid, pid, currentElement, previousElement) {
    if (pid) {
     $("[href='#"+pid+"']").removeClass('active');
   }
   if (cid) {
     $("[href='#"+cid+"']").addClass('active');
   }
 });

  $("h3").scrollagent(function(cid, pid, currentElement, previousElement) {
    if (pid) {
     $("[href='#"+pid+"']").removeClass('active');
   }
   if (cid) {
     $("[href='#"+cid+"']").addClass('active');
   }
 });

  setBootstrapStyle();
  replaceCodeSample();
  mermaid.init();

});
  
/*
*flatdoc:loading
*/
$(document).on('flatdoc:loading', function() {
    // I don't like this section to appear
    $(".spinner-container").show();
  });


 /*
  * Title card.
  */

  $(function() {
    var $card = $('.title-card');
    if (!$card.length) return;

    var $header = $('.header');
    var headerHeight = $header.length ? $header.outerHeight() : 0;

    $window
    .on('resize.title-card', function() {
      var windowWidth = $window.width();

      if (windowWidth < 480) {
        $card.css('height', '');
      } else {
        var height = $window.height();
        $card.css('height', height - headerHeight);
      }
    })
    .trigger('resize.title-card');
  });

  /*
   * Sidebar stick.
   */

   $(function() {
    var $sidebar = $('.menubar');
    var elTop;

    $window
    .on('resize.sidestick', function() {
      $sidebar.removeClass('fixed');
      elTop = $sidebar.offset().top;
      $window.trigger('scroll.sidestick');
    })
    .on('scroll.sidestick', function() {
      var scrollY = $window.scrollTop();
      $sidebar.toggleClass('fixed', (scrollY >= elTop));
    })
    .trigger('resize.sidestick');
  });

 })(jQuery);
/*! jQuery.scrollagent (c) 2012, Rico Sta. Cruz. MIT License.
*  https://github.com/rstacruz/jquery-stuff/tree/master/scrollagent */

// Call $(...).scrollagent() with a callback function.
//
// The callback will be called everytime the focus changes.
//
// Example:
//
//      $("h2").scrollagent(function(cid, pid, currentElement, previousElement) {
//        if (pid) {
//          $("[href='#"+pid+"']").removeClass('active');
//        }
//        if (cid) {
//          $("[href='#"+cid+"']").addClass('active');
//        }
//      });

(function($) {

  $.fn.scrollagent = function(options, callback) {
    // Account for $.scrollspy(function)
    if (typeof callback === 'undefined') {
      callback = options;
      options = {};
    }

    var $sections = $(this);
    var $parent = options.parent || $(window);

    // Find the top offsets of each section
    var offsets = [];
    $sections.each(function(i) {
      var offset = $(this).attr('data-anchor-offset') ?
      parseInt($(this).attr('data-anchor-offset'), 10) :
      (options.offset || 0);

      offsets.push({
        id: $(this).attr('id'),
        index: i,
        el: this,
        offset: offset
      });
    });

    // State
    var current = null;
    var height = null;
    var range = null;

    // Save the height. Do this only whenever the window is resized so we don't
    // recalculate often.
    $(window).on('resize', function() {
      height = $parent.height();
      range = $(document).height();
    });

    // Find the current active section every scroll tick.
    $parent.on('scroll', function() {
      var y = $parent.scrollTop();
      y += height * (0.3 + 0.7 * Math.pow(y/range, 2));

      var latest = null;

      for (var i in offsets) {
        if (offsets.hasOwnProperty(i)) {
          var offset = offsets[i];
          if ($(offset.el).offset().top + offset.offset < y) latest = offset;
        }
      }

      if (latest && (!current || (latest.index !== current.index))) {
        callback.call($sections,
          latest ? latest.id : null,
          current ? current.id : null,
          latest ? latest.el : null,
          current ? current.el : null);
        current = latest;
      }
    });

    $(window).trigger('resize');
    $parent.trigger('scroll');

    return this;
  };

})(jQuery);
/*! Anchorjump (c) 2012, Rico Sta. Cruz. MIT License.
*   http://github.com/rstacruz/jquery-stuff/tree/master/anchorjump */

// Makes anchor jumps happen with smooth scrolling.
//
//    $("#menu a").anchorjump();
//    $("#menu a").anchorjump({ offset: -30 });
//
//    // Via delegate:
//    $("#menu").anchorjump({ for: 'a', offset: -30 });
//
// You may specify a parent. This makes it scroll down to the parent.
// Great for tabbed views.
//
//     $('#menu a').anchorjump({ parent: '.anchor' });
//
// You can jump to a given area.
//
//     $.anchorjump('#bank-deposit', options);

(function($) {
  var defaults = {
    'speed': 500,
    'offset': 0,
    'for': null,
    'parent': null
  };

  $.fn.anchorjump = function(options) {
    options = $.extend({}, defaults, options);

    if (options['for']) {
      this.on('click', options['for'], onClick);
    } else {
      this.on('click', onClick);
    }

    function onClick(e) {
      var $a = $(e.target).closest('a');
      if (e.ctrlKey || e.metaKey || e.altKey || $a.attr('target')) return;

      e.preventDefault();
      var href = $a.attr('href');

      $.anchorjump(href, options);
    }
  };

  // Jump to a given area.
  $.anchorjump = function(href, options) {
    options = $.extend({}, defaults, options);

    var top = 0;

    if (href != '#') {
      var $area = $(href);
      // Find the parent
      if (options.parent) {
        var $parent = $area.closest(options.parent);
        if ($parent.length) { $area = $parent; }
      }
      if (!$area.length) { return; }

      // Determine the pixel offset; use the default if not available
      var offset =
      $area.attr('data-anchor-offset') ?
      parseInt($area.attr('data-anchor-offset'), 10) :
      options.offset;

      top = Math.max(0, $area.offset().top + offset);
    }

    $('html, body').animate({ scrollTop: top }, options.speed);
    $('body').trigger('anchor', href);

    // Add the location hash via pushState.
    if (window.history.pushState) {
      window.history.pushState({ href: href }, "", href);
    }
  };
})(jQuery);


function setBootstrapStyle(){

  // Coloca divs em volta de cada área
  $('.content h1').each(function(){ $(this).nextUntil('h1').addBack().wrapAll("<div class='limit-bottom-margin'><div class='bs-callout bs-callout-info'></div></div>");});

}

// troca codigo selecionado nos exemplos
function changeCode(codeSampleNumber , input){

  var selectedInput = $(input).val();
  var selectedLabel = $(input).parent();
  var btnGroup = selectedLabel.parent();
  var selectedCodeBlock = $('.code-sample-codes')[codeSampleNumber];

  btnGroup.children('label').removeClass('active');
  selectedLabel.addClass('active');

  $(selectedCodeBlock).children('pre').each(function(i){
    $(selectedCodeBlock).children('pre').hide();
  });

  $($(selectedCodeBlock).children('pre')[selectedInput]).show();

}

// Buscar todos os links dentro de um div com a classe '.code-sample-options' e substituir por um selecionador de codigo
function replaceCodeSample(){

  $('.code-sample-options').each(function(codeSampleNumber){

    var $div = $(this);
    var href = $div.find('a').attr('href');
    var radioName = 'codeSampleRadioName' + codeSampleNumber;

    $div.html('<div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="radio" name="'+ radioName + '" onclick=changeCode('+ codeSampleNumber +',this) value="-1" checked="checked">Esconder</label></div><div class="code-sample-codes" ></div><br>');

    this.$optionsDiv = $div.children('div.btn-group');
    this.$codesDiv = $div.children('div.code-sample-codes');
    $.ajax({
      url: href, 
      context: {
        $optionsDiv: this.$optionsDiv,
        $codesDiv: this.$codesDiv
      },
      success: function(markdown){

        var data = Flatdoc.parser.parse(markdown, Flatdoc.runner.prototype.highlight);
        var $content = data.content;
        var titles = $content.find('h2');
        var codes = $content.find('pre');
        var parentContext = this;

        titles.each(function(i){

          var title = $(titles[i]).text();
          parentContext.$optionsDiv.append('<label class="btn btn-primary"><input type="radio" name="'+ radioName + '" onclick="changeCode('+ codeSampleNumber +', this )" value="'+ i +'">'+ title +'</label>');
          parentContext.$codesDiv.append(codes);
          codes.hide();

        });
        parentContext.$codesDiv.children('pre').addClass('prettyprint');
      }
    });
  });
  prettyPrint();
}