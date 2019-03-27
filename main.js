const mdcFoo = require('mdc-foo');
const MDCFoo = mdcFoo.MDCFoo;
const MDCFooFoundation = mdcFoo.MDCFooFoundation;
var parentElement = document.getElementById(id);
 
var receivedElement = parentElement.querySelector('.received');
 
listeningElement.setAttribute('style', 'display:none;');
// check for null before changing
if (receivedElement != null) receivedElement.setAttribute('style', 'display:block;');


import {MDCTopAppBar} from '@material/top-app-bar/index';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import {MDCTextField} from '@material/textfield/index';
const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

import {MDCTextField} from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

import {MDCRipple} from '@material/ripple';

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


mdc.textField.MDCTextField.attachTo(document.querySelector('.mdc-text-field'));
import {MDCTextFieldIcon} from '@material/textfield/icon';

const icon = new MDCTextFieldIcon(document.querySelector('.mdc-text-field-icon'));

import {MDCTextFieldCharacterCounter} from '@material/textfield/character-counter';

const characterCounter = new MDCTextFieldCharacterCounter(document.querySelector('.mdc-text-field-character-counter'));