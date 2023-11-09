import styled from 'styled-components';

const Wrapper = styled.div`
:root {
    --surface-a: #ffffff;
    --surface-b: #f5f5f5;
    --surface-c: #edf0fa;
    --surface-d: #ebebeb;
    --surface-e: #ffffff;
    --surface-f: #ffffff;
    --text-color: #6c6c6c;
    --text-color-secondary: #898989;
    --primary-color: #5472d4;
    --primary-color-text: #ffffff;
    --font-family: Poppins, sans-serif;
    --surface-0: #ffffff;
    --surface-50: #f1f3f5;
    --surface-100: #e2e6eb;
    --surface-200: #c6cdd7;
    --surface-300: #a9b4c2;
    --surface-400: #8d9bae;
    --surface-500: #70829a;
    --surface-600: #5a687b;
    --surface-700: #434e5c;
    --surface-800: #2d343e;
    --surface-900: #161a1f;
    --gray-50: #f1f3f5;
    --gray-100: #e2e6eb;
    --gray-200: #c6cdd7;
    --gray-300: #a9b4c2;
    --gray-400: #8d9bae;
    --gray-500: #70829a;
    --gray-600: #5a687b;
    --gray-700: #434e5c;
    --gray-800: #2d343e;
    --gray-900: #161a1f;
    --content-padding: 1rem;
    --inline-spacing: 0.5rem;
    --border-radius: 6px;
    --surface-ground: #f5f5f5;
    --surface-section: #ffffff;
    --surface-card: #ffffff;
    --surface-overlay: #ffffff;
    --surface-border: #ebebeb;
    --surface-hover: #edf0fa;
    --focus-ring: 0 0 0 0.1rem #bbc7ee;
    --maskbg: rgba(0, 0, 0, 0.4);
    --highlight-bg: #ced6f1;
    --highlight-text-color: #585858;
    color-scheme: light;
  }

 
  * {
    box-sizing: border-box;
    
  }

  .p-component {
    font-family: Poppins, sans-serif;
    font-size: 0.9rem;
    font-weight: normal;
    box-shadow: 10px 20px 10px -15px rgba(53, 18, 122, 0.497159);

  }

  .p-component-overlay {
    background-color: rgba(0, 0, 0, 0.4);
    transition-duration: 0.3s;
  }

  .p-disabled,
  .p-component:disabled {
    opacity: 0.6;
  }

  .p-error {
    color: #f88c79;
  }

  .p-text-secondary {
    color: #898989;
  }

  .pi {
    font-size: 1rem;
  }

  .p-icon {
    width: 1rem;
    height: 1rem;
  }

  .p-link {
    font-size: 1rem;
    font-family: Poppins, sans-serif;
    border-radius: 6px;
  }
  .p-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-component-overlay-enter {
    animation: p-component-overlay-enter-animation 150ms forwards;
  }

  .p-component-overlay-leave {
    animation: p-component-overlay-leave-animation 150ms forwards;
  }

  @keyframes p-component-overlay-enter-animation {
    from {
      background-color: transparent;
    }
    to {
      background-color: var(--maskbg);
    }
  }
  @keyframes p-component-overlay-leave-animation {
    from {
      background-color: var(--maskbg);
    }
    to {
      background-color: transparent;
    }
  }

  :root {
    --blue-50: #f6fbfd;
    --blue-100: #d6eaf5;
    --blue-200: #b5d9ed;
    --blue-300: #95c8e4;
    --blue-400: #74b7dc;
    --blue-500: #54a6d4;
    --blue-600: #478db4;
    --blue-700: #3b7494;
    --blue-800: #2e5b75;
    --blue-900: #224255;
    --green-50: #f9fbf4;
    --green-100: #e3eccc;
    --green-200: #cddca4;
    --green-300: #b7cd7c;
    --green-400: #a1bd54;
    --green-500: #8bae2c;
    --green-600: #769425;
    --green-700: #617a1f;
    --green-800: #4c6018;
    --green-900: #384612;
    --yellow-50: #fffdf4;
    --yellow-100: #fff4cc;
    --yellow-200: #ffeba3;
    --yellow-300: #ffe27b;
    --yellow-400: #ffd952;
    --yellow-500: #ffd02a;
    --yellow-600: #d9b124;
    --yellow-700: #b3921d;
    --yellow-800: #8c7217;
    --yellow-900: #665311;
    --cyan-50: #f5fafc;
    --cyan-100: #cfe9f3;
    --cyan-200: #a8d8e9;
    --cyan-300: #82c7df;
    --cyan-400: #5bb5d6;
    --cyan-500: #35a4cc;
    --cyan-600: #2d8bad;
    --cyan-700: #25738f;
    --cyan-800: #1d5a70;
    --cyan-900: #154252;
    --pink-50: #fdf6f8;
    --pink-100: #f5d6dd;
    --pink-200: #edb5c2;
    --pink-300: #e495a8;
    --pink-400: #dc748d;
    --pink-500: #d45472;
    --pink-600: #b44761;
    --pink-700: #943b50;
    --pink-800: #752e3f;
    --pink-900: #55222e;
    --indigo-50: #f6f8fd;
    --indigo-100: #d6ddf5;
    --indigo-200: #b5c2ed;
    --indigo-300: #95a8e4;
    --indigo-400: #748ddc;
    --indigo-500: #5472d4;
    --indigo-600: #4761b4;
    --indigo-700: #3b5094;
    --indigo-800: #2e3f75;
    --indigo-900: #222e55;
    --teal-50: #f5fcfa;
    --teal-100: #d1f0e8;
    --teal-200: #ace3d6;
    --teal-300: #88d7c4;
    --teal-400: #63cbb2;
    --teal-500: #3fbfa0;
    --teal-600: #36a288;
    --teal-700: #2c8670;
    --teal-800: #236958;
    --teal-900: #194c40;
    --orange-50: #fffaf4;
    --orange-100: #ffe5cc;
    --orange-200: #ffd0a3;
    --orange-300: #ffbb7b;
    --orange-400: #ffa752;
    --orange-500: #ff922a;
    --orange-600: #d97c24;
    --orange-700: #b3661d;
    --orange-800: #8c5017;
    --orange-900: #663a11;
    --bluegray-50: #f9fafb;
    --bluegray-100: #e1e5ea;
    --bluegray-200: #c9d0d9;
    --bluegray-300: #b1bbc8;
    --bluegray-400: #99a6b7;
    --bluegray-500: #8191a6;
    --bluegray-600: #6e7b8d;
    --bluegray-700: #5a6674;
    --bluegray-800: #47505b;
    --bluegray-900: #343a42;
    --purple-50: #f8f6fd;
    --purple-100: #ded6f5;
    --purple-200: #c4b5ed;
    --purple-300: #aa95e4;
    --purple-400: #9074dc;
    --purple-500: #7654d4;
    --purple-600: #6447b4;
    --purple-700: #533b94;
    --purple-800: #412e75;
    --purple-900: #2f2255;
    --red-50: #fff7f6;
    --red-100: #ffd8d2;
    --red-200: #ffb9af;
    --red-300: #ff9b8b;
    --red-400: #ff7c68;
    --red-500: #ff5d44;
    --red-600: #d94f3a;
    --red-700: #b34130;
    --red-800: #8c3325;
    --red-900: #66251b;
    --primary-50: #f6f8fd;
    --primary-100: #d6ddf5;
    --primary-200: #b5c2ed;
    --primary-300: #95a8e4;
    --primary-400: #748ddc;
    --primary-500: #5472d4;
    --primary-600: #4761b4;
    --primary-700: #3b5094;
    --primary-800: #2e3f75;
    --primary-900: #222e55;
  }

  .p-autocomplete .p-autocomplete-loader {
    right: 0.75rem;
  }
  .p-autocomplete.p-autocomplete-dd .p-autocomplete-loader {
    right: 3.607rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container {
    padding: 0.25rem 0.75rem;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled):hover {
    border-color: #cecece;
  }
  .p-autocomplete .p-autocomplete-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-autocomplete
    .p-autocomplete-multiple-container
    .p-autocomplete-input-token {
    padding: 0.25rem 0;
  }
  .p-autocomplete
    .p-autocomplete-multiple-container
    .p-autocomplete-input-token
    input {
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    color: #6c6c6c;
    padding: 0;
    margin: 0;
  }
  .p-autocomplete .p-autocomplete-multiple-container .p-autocomplete-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #ced6f1;
    color: #585858;
    border-radius: 6px;
  }
  .p-autocomplete
    .p-autocomplete-multiple-container
    .p-autocomplete-token
    .p-autocomplete-token-icon {
    margin-left: 0.5rem;
  }
  .p-autocomplete.p-invalid.p-component > .p-inputtext {
    border-color: #f88c79;
  }

  .p-autocomplete-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-autocomplete-panel .p-autocomplete-items {
    padding: 0.5rem 0.5rem;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item {
    margin: 0 0 4px 0;
    padding: 0.5rem 1rem;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item:hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-autocomplete-panel .p-autocomplete-items .p-autocomplete-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
  }

  .p-calendar.p-invalid.p-component > .p-inputtext {
    border-color: #f88c79;
  }

  .p-datepicker {
    padding: 0.5rem;
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #e1e1e1;
    border-radius: 6px;
  }
  .p-datepicker:not(.p-datepicker-inline) {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-datepicker:not(.p-datepicker-inline) .p-datepicker-header {
    background: #ffffff;
  }
  .p-datepicker .p-datepicker-header {
    padding: 0.5rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
    margin: 0;
    border-bottom: 1px solid #ebebeb;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev,
  .p-datepicker .p-datepicker-header .p-datepicker-next {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:enabled:hover,
  .p-datepicker .p-datepicker-header .p-datepicker-next:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-prev:focus,
  .p-datepicker .p-datepicker-header .p-datepicker-next:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title {
    line-height: 2rem;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-year,
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    color: #6c6c6c;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    font-weight: 600;
    padding: 0.5rem;
  }
  .p-datepicker
    .p-datepicker-header
    .p-datepicker-title
    .p-datepicker-year:enabled:hover,
  .p-datepicker
    .p-datepicker-header
    .p-datepicker-title
    .p-datepicker-month:enabled:hover {
    color: #5472d4;
  }
  .p-datepicker .p-datepicker-header .p-datepicker-title .p-datepicker-month {
    margin-right: 0.5rem;
  }
  .p-datepicker table {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
  .p-datepicker table th {
    padding: 0.5rem;
  }
  .p-datepicker table th > span {
    width: 2.5rem;
    height: 2.5rem;
  }
  .p-datepicker table td {
    padding: 0.5rem;
  }
  .p-datepicker table td > span {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: box-shadow 0.3s;
    border: 1px solid transparent;
  }
  .p-datepicker table td > span.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-datepicker table td > span:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-datepicker table td.p-datepicker-today > span {
    background: #e1e1e1;
    color: #6c6c6c;
    border-color: transparent;
  }
  .p-datepicker table td.p-datepicker-today > span.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-datepicker .p-datepicker-buttonbar {
    padding: 1rem 0;
    border-top: 1px solid #ebebeb;
  }
  .p-datepicker .p-datepicker-buttonbar .p-button {
    width: auto;
  }
  .p-datepicker .p-timepicker {
    border-top: 1px solid #ebebeb;
    padding: 0.5rem;
  }
  .p-datepicker .p-timepicker button {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-datepicker .p-timepicker button:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-datepicker .p-timepicker button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-datepicker .p-timepicker button:last-child {
    margin-top: 0.2em;
  }
  .p-datepicker .p-timepicker span {
    font-size: 1.25rem;
  }
  .p-datepicker .p-timepicker > div {
    padding: 0 0.5rem;
  }
  .p-datepicker.p-datepicker-timeonly .p-timepicker {
    border-top: 0 none;
  }
  .p-datepicker .p-monthpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month {
    padding: 0.5rem;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-datepicker .p-monthpicker .p-monthpicker-month.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-datepicker .p-yearpicker {
    margin: 0.5rem 0;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year {
    padding: 0.5rem;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-datepicker .p-yearpicker .p-yearpicker-year.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group {
    border-left: 1px solid #ebebeb;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    padding-top: 0;
    padding-bottom: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:first-child {
    padding-left: 0;
  }
  .p-datepicker.p-datepicker-multiple-month .p-datepicker-group:last-child {
    padding-right: 0;
    border-left: 0 none;
  }
  .p-datepicker:not(.p-disabled)
    table
    td
    span:not(.p-highlight):not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-datepicker:not(.p-disabled)
    table
    td
    span:not(.p-highlight):not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-datepicker:not(.p-disabled)
    .p-monthpicker
    .p-monthpicker-month:not(.p-disabled):not(.p-highlight):hover {
    background: #edf0fa;
  }
  .p-datepicker:not(.p-disabled)
    .p-monthpicker
    .p-monthpicker-month:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-datepicker:not(.p-disabled)
    .p-yearpicker
    .p-yearpicker-year:not(.p-disabled):not(.p-highlight):hover {
    background: #edf0fa;
  }
  .p-datepicker:not(.p-disabled)
    .p-yearpicker
    .p-yearpicker-year:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  @media screen and (max-width: 769px) {
    .p-datepicker table th,
    .p-datepicker table td {
      padding: 0;
    }
  }
  .p-cascadeselect {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-cascadeselect:not(.p-disabled):hover {
    border-color: #cecece;
  }
  .p-cascadeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-cascadeselect .p-cascadeselect-label {
    background: transparent;
    border: 0 none;
    padding: 0.5rem 0.75rem;
  }
  .p-cascadeselect .p-cascadeselect-label.p-placeholder {
    color: #898989;
  }
  .p-cascadeselect .p-cascadeselect-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-cascadeselect .p-cascadeselect-trigger {
    background: transparent;
    color: #898989;
    width: 2.857rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-cascadeselect.p-invalid.p-component {
    border-color: #f88c79;
  }

  .p-cascadeselect-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-cascadeselect-panel .p-cascadeselect-items {
    padding: 0.5rem 0.5rem;
  }
  .p-cascadeselect-panel .p-cascadeselect-items .p-cascadeselect-item {
    margin: 0 0 4px 0;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-cascadeselect-panel
    .p-cascadeselect-items
    .p-cascadeselect-item
    .p-cascadeselect-item-content {
    padding: 0.5rem 1rem;
  }
  .p-cascadeselect-panel
    .p-cascadeselect-items
    .p-cascadeselect-item
    .p-cascadeselect-item-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-cascadeselect-panel
    .p-cascadeselect-items
    .p-cascadeselect-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-cascadeselect-panel
    .p-cascadeselect-items
    .p-cascadeselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-cascadeselect-panel
    .p-cascadeselect-items
    .p-cascadeselect-item
    .p-cascadeselect-group-icon {
    font-size: 0.875rem;
  }
  .p-cascadeselect-panel
    .p-cascadeselect-items
    .p-cascadeselect-item
    .p-cascadeselect-group-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-input-filled .p-cascadeselect {
    background: #f2f2f2;
  }
  .p-input-filled .p-cascadeselect:not(.p-disabled):hover {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-cascadeselect:not(.p-disabled).p-focus {
    background-color: #f2f2f2;
  }

  .p-checkbox {
    width: 20px;
    height: 20px;
  }
  .p-checkbox .p-checkbox-box {
    border: 2px solid #e1e1e1;
    background: #ffffff;
    width: 20px;
    height: 20px;
    color: #6c6c6c;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon {
    transition-duration: 0.3s;
    color: #ffffff;
    font-size: 14px;
  }
  .p-checkbox .p-checkbox-box .p-checkbox-icon.p-icon {
    width: 14px;
    height: 14px;
  }
  .p-checkbox .p-checkbox-box.p-highlight {
    border-color: #5472d4;
    background: #5472d4;
  }
  .p-checkbox .p-checkbox-box.p-highlight:not(.p-disabled):hover {
    border-color: #3c5ece;
    background: #3c5ece;
    color: #ffffff;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    border-color: #cecece;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box.p-highlight:hover {
    border-color: #3c5ece;
    background: #3c5ece;
    color: #ffffff;
  }
  .p-checkbox.p-invalid > .p-checkbox-box {
    border-color: #f88c79;
  }

  .p-input-filled .p-checkbox .p-checkbox-box {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-checkbox .p-checkbox-box.p-highlight {
    background: #5472d4;
  }
  .p-input-filled .p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
    background-color: #f2f2f2;
  }
  .p-input-filled
    .p-checkbox:not(.p-checkbox-disabled)
    .p-checkbox-box.p-highlight:hover {
    background: #3c5ece;
  }

  .p-chips .p-chips-multiple-container {
    padding: 0.25rem 0.75rem;
  }
  .p-chips .p-chips-multiple-container:not(.p-disabled):hover {
    border-color: #cecece;
  }
  .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-chips .p-chips-multiple-container .p-chips-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #ebebeb;
    color: #6c6c6c;
    border-radius: 16px;
  }
  .p-chips .p-chips-multiple-container .p-chips-token .p-chips-token-icon {
    margin-left: 0.5rem;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token {
    padding: 0.25rem 0;
  }
  .p-chips .p-chips-multiple-container .p-chips-input-token input {
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    color: #6c6c6c;
    padding: 0;
    margin: 0;
  }
  .p-chips.p-invalid.p-component > .p-inputtext {
    border-color: #f88c79;
  }

  .p-colorpicker-preview {
    width: 2rem;
    height: 2rem;
  }

  .p-colorpicker-panel {
    background: #585858;
    border: 1px solid #585858;
  }
  .p-colorpicker-panel .p-colorpicker-color-handle,
  .p-colorpicker-panel .p-colorpicker-hue-handle {
    border-color: #ffffff;
  }

  .p-colorpicker-overlay-panel {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .p-dropdown {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-dropdown:not(.p-disabled):hover {
    border-color: #cecece;
  }
  .p-dropdown:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-dropdown.p-dropdown-clearable .p-dropdown-label {
    padding-right: 1.75rem;
  }
  .p-dropdown .p-dropdown-label {
    background: transparent;
    border: 0 none;
  }
  .p-dropdown .p-dropdown-label.p-placeholder {
    color: #898989;
  }
  .p-dropdown .p-dropdown-label:enabled:focus {
    outline: 0 none;
    box-shadow: none;
  }
  .p-dropdown .p-dropdown-trigger {
    background: transparent;
    color: #898989;
    width: 2.857rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-dropdown .p-dropdown-clear-icon {
    color: #898989;
    right: 2.857rem;
  }
  .p-dropdown.p-invalid.p-component {
    border-color: #f88c79;
  }

  .p-dropdown-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-dropdown-panel .p-dropdown-header {
    padding: 0.5rem 1.5rem;
    border-bottom: 0 none;
    color: #6c6c6c;
    background: #ffffff;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter {
    padding-right: 1.75rem;
    margin-right: -1.75rem;
  }
  .p-dropdown-panel .p-dropdown-header .p-dropdown-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-dropdown-panel
    .p-dropdown-header
    .p-dropdown-clearable-filter
    .p-dropdown-filter {
    padding-right: 3.5rem;
    margin-right: -3.5rem;
  }
  .p-dropdown-panel
    .p-dropdown-header
    .p-dropdown-clearable-filter
    .p-dropdown-filter-clear-icon {
    right: 2.5rem;
  }
  .p-dropdown-panel .p-dropdown-items {
    padding: 0.5rem 0.5rem;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item {
    margin: 0 0 4px 0;
    padding: 0.5rem 1rem;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-dropdown-panel
    .p-dropdown-items
    .p-dropdown-item:not(.p-highlight):not(.p-disabled):hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
  }
  .p-dropdown-panel .p-dropdown-items .p-dropdown-empty-message {
    padding: 0.5rem 1rem;
    color: #6c6c6c;
    background: transparent;
  }

  .p-input-filled .p-dropdown {
    background: #f2f2f2;
  }
  .p-input-filled .p-dropdown:not(.p-disabled):hover {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-dropdown:not(.p-disabled).p-focus {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-dropdown:not(.p-disabled).p-focus .p-inputtext {
    background-color: transparent;
  }

  .p-editor-container .p-editor-toolbar {
    background: #ffffff;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-editor-container .p-editor-toolbar.ql-snow {
    border: 2px solid #ebebeb;
  }
  .p-editor-container .p-editor-toolbar.ql-snow .ql-stroke {
    stroke: #898989;
  }
  .p-editor-container .p-editor-toolbar.ql-snow .ql-fill {
    fill: #898989;
  }
  .p-editor-container .p-editor-toolbar.ql-snow .ql-picker .ql-picker-label {
    border: 0 none;
    color: #898989;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker
    .ql-picker-label:hover {
    color: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker
    .ql-picker-label:hover
    .ql-stroke {
    stroke: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker
    .ql-picker-label:hover
    .ql-fill {
    fill: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded
    .ql-picker-label {
    color: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded
    .ql-picker-label
    .ql-stroke {
    stroke: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded
    .ql-picker-label
    .ql-fill {
    fill: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded
    .ql-picker-options {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    padding: 0.5rem 0.5rem;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded
    .ql-picker-options
    .ql-picker-item {
    color: #6c6c6c;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded
    .ql-picker-options
    .ql-picker-item:hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-editor-container
    .p-editor-toolbar.ql-snow
    .ql-picker.ql-expanded:not(.ql-icon-picker)
    .ql-picker-item {
    padding: 0.5rem 1rem;
  }
  .p-editor-container .p-editor-content {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-editor-container .p-editor-content.ql-snow {
    border: 2px solid #ebebeb;
  }
  .p-editor-container .p-editor-content .ql-editor {
    background: #ffffff;
    color: #6c6c6c;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-editor-container .ql-snow.ql-toolbar button:hover,
  .p-editor-container .ql-snow.ql-toolbar button:focus {
    color: #6c6c6c;
  }
  .p-editor-container .ql-snow.ql-toolbar button:hover .ql-stroke,
  .p-editor-container .ql-snow.ql-toolbar button:focus .ql-stroke {
    stroke: #6c6c6c;
  }
  .p-editor-container .ql-snow.ql-toolbar button:hover .ql-fill,
  .p-editor-container .ql-snow.ql-toolbar button:focus .ql-fill {
    fill: #6c6c6c;
  }
  .p-editor-container .ql-snow.ql-toolbar button.ql-active,
  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active,
  .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected {
    color: #5472d4;
  }
  .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
  .p-editor-container
    .ql-snow.ql-toolbar
    .ql-picker-item.ql-selected
    .ql-stroke {
    stroke: #5472d4;
  }
  .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .p-editor-container .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
  .p-editor-container .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill {
    fill: #5472d4;
  }
  .p-editor-container .ql-snow.ql-toolbar button.ql-active .ql-picker-label,
  .p-editor-container
    .ql-snow.ql-toolbar
    .ql-picker-label.ql-active
    .ql-picker-label,
  .p-editor-container
    .ql-snow.ql-toolbar
    .ql-picker-item.ql-selected
    .ql-picker-label {
    color: #5472d4;
  }

  .p-inputgroup-addon {
    background: #f5f5f5;
    color: #898989;
    border-top: 2px solid #e1e1e1;
    border-left: 2px solid #e1e1e1;
    border-bottom: 2px solid #e1e1e1;
    padding: 0.5rem 0.75rem;
    min-width: 2.857rem;
  }
  .p-inputgroup-addon:last-child {
    border-right: 2px solid #e1e1e1;
  }

  .p-inputgroup > .p-component,
  .p-inputgroup > .p-inputwrapper > .p-inputtext,
  .p-inputgroup > .p-float-label > .p-component {
    border-radius: 0;
    margin: 0;
  }
  .p-inputgroup > .p-component + .p-inputgroup-addon,
  .p-inputgroup > .p-inputwrapper > .p-inputtext + .p-inputgroup-addon,
  .p-inputgroup > .p-float-label > .p-component + .p-inputgroup-addon {
    border-left: 0 none;
  }
  .p-inputgroup > .p-component:focus,
  .p-inputgroup > .p-inputwrapper > .p-inputtext:focus,
  .p-inputgroup > .p-float-label > .p-component:focus {
    z-index: 1;
  }
  .p-inputgroup > .p-component:focus ~ label,
  .p-inputgroup > .p-inputwrapper > .p-inputtext:focus ~ label,
  .p-inputgroup > .p-float-label > .p-component:focus ~ label {
    z-index: 1;
  }

  .p-inputgroup-addon:first-child,
  .p-inputgroup button:first-child,
  .p-inputgroup input:first-child,
  .p-inputgroup > .p-inputwrapper:first-child,
  .p-inputgroup > .p-inputwrapper:first-child > .p-inputtext {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .p-inputgroup .p-float-label:first-child input {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .p-inputgroup-addon:last-child,
  .p-inputgroup button:last-child,
  .p-inputgroup input:last-child,
  .p-inputgroup > .p-inputwrapper:last-child,
  .p-inputgroup > .p-inputwrapper:last-child > .p-inputtext {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .p-inputgroup .p-float-label:last-child input {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .p-fluid .p-inputgroup .p-button {
    width: auto;
  }
  .p-fluid .p-inputgroup .p-button.p-button-icon-only {
    width: 2.857rem;
  }

  .p-inputnumber.p-invalid.p-component > .p-inputtext {
    border-color: #f88c79;
  }

  .p-inputswitch {
    width: 3rem;
    height: 1.75rem;
  }
  .p-inputswitch .p-inputswitch-slider {
    background: #cecece;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-inputswitch .p-inputswitch-slider:before {
    background: #ffffff;
    width: 1.25rem;
    height: 1.25rem;
    left: 0.25rem;
    margin-top: -0.625rem;
    border-radius: 6px;
    transition-duration: 0.3s;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    transform: translateX(1.25rem);
  }
  .p-inputswitch.p-focus .p-inputswitch-slider {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-inputswitch:not(.p-disabled):hover .p-inputswitch-slider {
    background: #b9b9b9;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider {
    background: #5472d4;
  }
  .p-inputswitch.p-inputswitch-checked .p-inputswitch-slider:before {
    background: #ffffff;
  }
  .p-inputswitch.p-inputswitch-checked:not(.p-disabled):hover
    .p-inputswitch-slider {
    background: #4868d1;
  }
  .p-inputswitch.p-invalid .p-inputswitch-slider {
    border-color: #f88c79;
  }

  .p-inputtext {
    font-family: Poppins, sans-serif;
    font-size: 1rem;
    color: #6c6c6c;
    background: #ffffff;
    padding: 0.5rem 0.75rem;
    border: 2px solid #e1e1e1;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    appearance: none;
    border-radius: 6px;
  }
  .p-inputtext:enabled:hover {
    border-color: #cecece;
  }
  .p-inputtext:enabled:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-inputtext.p-invalid.p-component {
    border-color: #f88c79;
  }
  .p-inputtext.p-inputtext-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }
  .p-inputtext.p-inputtext-lg {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }

  .p-float-label > label {
    left: 0.75rem;
    color: #898989;
    transition-duration: 0.3s;
  }

  .p-float-label > label.p-error {
    color: #f88c79;
  }

  .p-input-icon-left > i:first-of-type,
  .p-input-icon-left > svg:first-of-type,
  .p-input-icon-left > .p-input-prefix {
    left: 0.75rem;
    color: #898989;
  }

  .p-input-icon-left > .p-inputtext {
    padding-left: 2.5rem;
  }

  .p-input-icon-left.p-float-label > label {
    left: 2.5rem;
  }

  .p-input-icon-right > i:last-of-type,
  .p-input-icon-right > svg:last-of-type,
  .p-input-icon-right > .p-input-suffix {
    right: 0.75rem;
    color: #898989;
  }

  .p-input-icon-right > .p-inputtext {
    padding-right: 2.5rem;
  }

  ::-webkit-input-placeholder {
    color: #898989;
  }

  :-moz-placeholder {
    color: #898989;
  }

  ::-moz-placeholder {
    color: #898989;
  }

  :-ms-input-placeholder {
    color: #898989;
  }

  .p-input-filled .p-inputtext {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-inputtext:enabled:hover {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-inputtext:enabled:focus {
    background-color: #f2f2f2;
  }

  .p-inputtext-sm .p-inputtext {
    font-size: 0.875rem;
    padding: 0.4375rem 0.65625rem;
  }

  .p-inputtext-lg .p-inputtext {
    font-size: 1.25rem;
    padding: 0.625rem 0.9375rem;
  }

  .p-listbox {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #e1e1e1;
    border-radius: 6px;
  }
  .p-listbox .p-listbox-header {
    padding: 0.5rem 1.5rem;
    border-bottom: 0 none;
    color: #6c6c6c;
    background: #ffffff;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-listbox .p-listbox-header .p-listbox-filter {
    padding-right: 1.75rem;
  }
  .p-listbox .p-listbox-header .p-listbox-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-listbox .p-listbox-list {
    padding: 0.5rem 0.5rem;
  }
  .p-listbox .p-listbox-list .p-listbox-item {
    margin: 0 0 4px 0;
    padding: 0.5rem 1rem;
    border: 0 none;
    color: #6c6c6c;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-listbox .p-listbox-list .p-listbox-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-listbox .p-listbox-list .p-listbox-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-listbox .p-listbox-list .p-listbox-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
  }
  .p-listbox .p-listbox-list .p-listbox-empty-message {
    padding: 0.5rem 1rem;
    color: #6c6c6c;
    background: transparent;
  }
  .p-listbox:not(.p-disabled)
    .p-listbox-item:not(.p-highlight):not(.p-disabled):hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-listbox.p-invalid {
    border-color: #f88c79;
  }

  .p-mention-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-mention-panel .p-mention-items {
    padding: 0.5rem 0.5rem;
  }
  .p-mention-panel .p-mention-items .p-mention-item {
    margin: 0 0 4px 0;
    padding: 0.5rem 1rem;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-mention-panel .p-mention-items .p-mention-item:hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-mention-panel .p-mention-items .p-mention-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }

  .p-multiselect {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-multiselect:not(.p-disabled):hover {
    border-color: #cecece;
  }
  .p-multiselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-multiselect.p-multiselect-clearable .p-multiselect-label {
    padding-right: 1.75rem;
  }
  .p-multiselect .p-multiselect-label {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-multiselect .p-multiselect-label.p-placeholder {
    color: #898989;
  }
  .p-multiselect.p-multiselect-chip .p-multiselect-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #ebebeb;
    color: #6c6c6c;
    border-radius: 16px;
  }
  .p-multiselect.p-multiselect-chip
    .p-multiselect-token
    .p-multiselect-token-icon {
    margin-left: 0.5rem;
  }
  .p-multiselect .p-multiselect-trigger {
    background: transparent;
    color: #898989;
    width: 2.857rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-multiselect .p-multiselect-clear-icon {
    color: #898989;
    right: 2.857rem;
  }
  .p-multiselect.p-invalid.p-component {
    border-color: #f88c79;
  }

  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip .p-multiselect-label {
    padding: 0.25rem 0.75rem;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-chip
    .p-multiselect-label.p-multiselect-items-label {
    padding: 0.5rem 0.75rem;
  }
  .p-inputwrapper-filled.p-multiselect.p-multiselect-clearable
    .p-multiselect-label {
    padding-right: 1.75rem;
  }

  .p-multiselect-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-multiselect-panel .p-multiselect-header {
    padding: 0.5rem 1.5rem;
    border-bottom: 0 none;
    color: #6c6c6c;
    background: #ffffff;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-filter-container {
    margin: 0 0.5rem;
  }
  .p-multiselect-panel
    .p-multiselect-header
    .p-multiselect-filter-container
    .p-inputtext {
    padding-right: 1.75rem;
  }
  .p-multiselect-panel
    .p-multiselect-header
    .p-multiselect-filter-container
    .p-multiselect-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-multiselect-panel
    .p-multiselect-header
    .p-multiselect-close:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-multiselect-panel .p-multiselect-header .p-multiselect-close:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-multiselect-panel .p-multiselect-items {
    padding: 0.5rem 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item {
    margin: 0 0 4px 0;
    padding: 0.5rem 1rem;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-multiselect-panel
    .p-multiselect-items
    .p-multiselect-item:not(.p-highlight):not(.p-disabled):hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-item-group {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
  }
  .p-multiselect-panel .p-multiselect-items .p-multiselect-empty-message {
    padding: 0.5rem 1rem;
    color: #6c6c6c;
    background: transparent;
  }

  .p-input-filled .p-multiselect {
    background: #f2f2f2;
  }
  .p-input-filled .p-multiselect:not(.p-disabled):hover {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-multiselect:not(.p-disabled).p-focus {
    background-color: #f2f2f2;
  }

  .p-password.p-invalid.p-component > .p-inputtext {
    border-color: #f88c79;
  }

  .p-password-panel {
    padding: 1rem;
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
  }
  .p-password-panel .p-password-meter {
    margin-bottom: 0.5rem;
    background: #ebebeb;
  }
  .p-password-panel .p-password-meter .p-password-strength.weak {
    background: #d45472;
  }
  .p-password-panel .p-password-meter .p-password-strength.medium {
    background: #ff922a;
  }
  .p-password-panel .p-password-meter .p-password-strength.strong {
    background: #8bae2c;
  }

  .p-radiobutton {
    width: 20px;
    height: 20px;
  }
  .p-radiobutton .p-radiobutton-box {
    border: 2px solid #e1e1e1;
    background: #ffffff;
    width: 20px;
    height: 20px;
    color: #6c6c6c;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-radiobutton .p-radiobutton-box:not(.p-disabled):not(.p-highlight):hover {
    border-color: #cecece;
  }
  .p-radiobutton .p-radiobutton-box:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-radiobutton .p-radiobutton-box .p-radiobutton-icon {
    width: 12px;
    height: 12px;
    transition-duration: 0.3s;
    background-color: #ffffff;
  }
  .p-radiobutton .p-radiobutton-box.p-highlight {
    border-color: #5472d4;
    background: #5472d4;
  }
  .p-radiobutton .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    border-color: #3c5ece;
    background: #3c5ece;
    color: #ffffff;
  }
  .p-radiobutton.p-invalid > .p-radiobutton-box {
    border-color: #f88c79;
  }
  .p-radiobutton:focus {
    outline: 0 none;
  }

  .p-input-filled .p-radiobutton .p-radiobutton-box {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box:not(.p-disabled):hover {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-radiobutton .p-radiobutton-box.p-highlight {
    background: #5472d4;
  }
  .p-input-filled
    .p-radiobutton
    .p-radiobutton-box.p-highlight:not(.p-disabled):hover {
    background: #3c5ece;
  }

  .p-rating {
    gap: 0.5rem;
  }
  .p-rating .p-rating-item .p-rating-icon {
    color: #6c6c6c;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    font-size: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-icon {
    width: 1.143rem;
    height: 1.143rem;
  }
  .p-rating .p-rating-item .p-rating-icon.p-rating-cancel {
    color: #df7e6c;
  }
  .p-rating .p-rating-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-rating .p-rating-item.p-rating-item-active .p-rating-icon {
    color: #5472d4;
  }
  .p-rating:not(.p-disabled):not(.p-readonly)
    .p-rating-item:hover
    .p-rating-icon {
    color: #5472d4;
  }
  .p-rating:not(.p-disabled):not(.p-readonly)
    .p-rating-item:hover
    .p-rating-icon.p-rating-cancel {
    color: #f88c79;
  }

  .p-selectbutton .p-button {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    color: #6c6c6c;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-selectbutton .p-button .p-button-icon-left,
  .p-selectbutton .p-button .p-button-icon-right {
    color: #898989;
  }
  .p-selectbutton .p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #edf0fa;
    border-color: #e1e1e1;
    color: #6c6c6c;
  }
  .p-selectbutton
    .p-button:not(.p-disabled):not(.p-highlight):hover
    .p-button-icon-left,
  .p-selectbutton
    .p-button:not(.p-disabled):not(.p-highlight):hover
    .p-button-icon-right {
    color: #898989;
  }
  .p-selectbutton .p-button.p-highlight {
    background: #ced6f1;
    border-color: #ced6f1;
    color: #585858;
  }
  .p-selectbutton .p-button.p-highlight .p-button-icon-left,
  .p-selectbutton .p-button.p-highlight .p-button-icon-right {
    color: #585858;
  }
  .p-selectbutton .p-button.p-highlight:hover {
    background: #bdc7ec;
    border-color: #bdc7ec;
    color: #585858;
  }
  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-left,
  .p-selectbutton .p-button.p-highlight:hover .p-button-icon-right {
    color: #585858;
  }
  .p-selectbutton.p-invalid > .p-button {
    border-color: #f88c79;
  }

  .p-slider {
    background: #ebebeb;
    border: 0 none;
    border-radius: 6px;
  }
  .p-slider.p-slider-horizontal {
    height: 0.286rem;
  }
  .p-slider.p-slider-horizontal .p-slider-handle {
    margin-top: -0.5715rem;
    margin-left: -0.5715rem;
  }
  .p-slider.p-slider-vertical {
    width: 0.286rem;
  }
  .p-slider.p-slider-vertical .p-slider-handle {
    margin-left: -0.5715rem;
    margin-bottom: -0.5715rem;
  }
  .p-slider .p-slider-handle {
    height: 1.143rem;
    width: 1.143rem;
    background: #ffffff;
    border: 2px solid #5472d4;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-slider .p-slider-handle:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-slider .p-slider-range {
    background: #5472d4;
  }
  .p-slider:not(.p-disabled) .p-slider-handle:hover {
    background: #5472d4;
    border-color: #5472d4;
  }

  .p-treeselect {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-treeselect:not(.p-disabled):hover {
    border-color: #cecece;
  }
  .p-treeselect:not(.p-disabled).p-focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: #91a4e3;
  }
  .p-treeselect .p-treeselect-label {
    padding: 0.5rem 0.75rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-treeselect .p-treeselect-label.p-placeholder {
    color: #898989;
  }
  .p-treeselect.p-treeselect-chip .p-treeselect-token {
    padding: 0.25rem 0.75rem;
    margin-right: 0.5rem;
    background: #ebebeb;
    color: #6c6c6c;
    border-radius: 16px;
  }
  .p-treeselect .p-treeselect-trigger {
    background: transparent;
    color: #898989;
    width: 2.857rem;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-treeselect.p-invalid.p-component {
    border-color: #f88c79;
  }

  .p-inputwrapper-filled.p-treeselect.p-treeselect-chip .p-treeselect-label {
    padding: 0.25rem 0.75rem;
  }

  .p-treeselect-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-treeselect-panel .p-treeselect-header {
    padding: 0.5rem 1.5rem;
    border-bottom: 0 none;
    color: #6c6c6c;
    background: #ffffff;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-filter-container {
    margin-right: 0.5rem;
  }
  .p-treeselect-panel
    .p-treeselect-header
    .p-treeselect-filter-container
    .p-treeselect-filter {
    padding-right: 1.75rem;
  }
  .p-treeselect-panel
    .p-treeselect-header
    .p-treeselect-filter-container
    .p-treeselect-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-treeselect-panel
    .p-treeselect-header
    .p-treeselect-filter-container.p-treeselect-clearable-filter
    .p-treeselect-filter {
    padding-right: 3.5rem;
  }
  .p-treeselect-panel
    .p-treeselect-header
    .p-treeselect-filter-container.p-treeselect-clearable-filter
    .p-treeselect-filter-clear-icon {
    right: 2.5rem;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-treeselect-panel .p-treeselect-header .p-treeselect-close:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-tree {
    border: 0 none;
  }
  .p-treeselect-panel .p-treeselect-items-wrapper .p-treeselect-empty-message {
    padding: 0.5rem 1rem;
    color: #6c6c6c;
    background: transparent;
  }

  .p-input-filled .p-treeselect {
    background: #f2f2f2;
  }
  .p-input-filled .p-treeselect:not(.p-disabled):hover {
    background-color: #f2f2f2;
  }
  .p-input-filled .p-treeselect:not(.p-disabled).p-focus {
    background-color: #f2f2f2;
  }

  .p-togglebutton.p-button {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    color: #6c6c6c;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-togglebutton.p-button .p-button-icon-left,
  .p-togglebutton.p-button .p-button-icon-right {
    color: #898989;
  }
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover {
    background: #edf0fa;
    border-color: #e1e1e1;
    color: #6c6c6c;
  }
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover
    .p-button-icon-left,
  .p-togglebutton.p-button:not(.p-disabled):not(.p-highlight):hover
    .p-button-icon-right {
    color: #898989;
  }
  .p-togglebutton.p-button.p-highlight {
    background: #ced6f1;
    border-color: #ced6f1;
    color: #585858;
  }
  .p-togglebutton.p-button.p-highlight .p-button-icon-left,
  .p-togglebutton.p-button.p-highlight .p-button-icon-right {
    color: #585858;
  }
  .p-togglebutton.p-button.p-highlight:hover {
    background: #bdc7ec;
    border-color: #bdc7ec;
    color: #585858;
  }
  .p-togglebutton.p-button.p-highlight:hover .p-button-icon-left,
  .p-togglebutton.p-button.p-highlight:hover .p-button-icon-right {
    color: #585858;
  }
  .p-togglebutton.p-button.p-invalid > .p-button {
    border-color: #f88c79;
  }

  .p-button {
    color: #ffffff;
    background: #5472d4;
    border: 2px solid #5472d4;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-button:enabled:hover,
  .p-button:not(button):not(a):not(.p-disabled):hover {
    background: #4868d1;
    color: #ffffff;
    border-color: #4868d1;
  }
  .p-button:enabled:active,
  .p-button:not(button):not(a):not(.p-disabled):active {
    background: #3c5ece;
    color: #ffffff;
    border-color: #3c5ece;
  }
  .p-button.p-button-outlined {
    background-color: transparent;
    color: #5472d4;
    border: 2px solid;
  }
  .p-button.p-button-outlined:enabled:hover,
  .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover {
    background: rgba(84, 114, 212, 0.04);
    color: #5472d4;
    border: 2px solid;
  }
  .p-button.p-button-outlined:enabled:active,
  .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active {
    background: rgba(84, 114, 212, 0.16);
    color: #5472d4;
    border: 2px solid;
  }
  .p-button.p-button-outlined.p-button-plain {
    color: #898989;
    border-color: #898989;
  }
  .p-button.p-button-outlined.p-button-plain:enabled:hover,
  .p-button.p-button-outlined.p-button-plain:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: #edf0fa;
    color: #898989;
  }
  .p-button.p-button-outlined.p-button-plain:enabled:active,
  .p-button.p-button-outlined.p-button-plain:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #ebebeb;
    color: #898989;
  }
  .p-button.p-button-text {
    background-color: transparent;
    color: #5472d4;
    border-color: transparent;
  }
  .p-button.p-button-text:enabled:hover,
  .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover {
    background: rgba(84, 114, 212, 0.04);
    color: #5472d4;
    border-color: transparent;
  }
  .p-button.p-button-text:enabled:active,
  .p-button.p-button-text:not(button):not(a):not(.p-disabled):active {
    background: rgba(84, 114, 212, 0.16);
    color: #5472d4;
    border-color: transparent;
  }
  .p-button.p-button-text.p-button-plain {
    color: #898989;
  }
  .p-button.p-button-text.p-button-plain:enabled:hover,
  .p-button.p-button-text.p-button-plain:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: #edf0fa;
    color: #898989;
  }
  .p-button.p-button-text.p-button-plain:enabled:active,
  .p-button.p-button-text.p-button-plain:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #ebebeb;
    color: #898989;
  }
  .p-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-button .p-button-label {
    transition-duration: 0.3s;
  }
  .p-button .p-button-icon-left {
    margin-right: 0.5rem;
  }
  .p-button .p-button-icon-right {
    margin-left: 0.5rem;
  }
  .p-button .p-button-icon-bottom {
    margin-top: 0.5rem;
  }
  .p-button .p-button-icon-top {
    margin-bottom: 0.5rem;
  }
  .p-button .p-badge {
    margin-left: 0.5rem;
    min-width: 1rem;
    height: 1rem;
    line-height: 1rem;
    color: #5472d4;
    background-color: #ffffff;
  }
  .p-button.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-button.p-button-rounded {
    border-radius: 2rem;
  }
  .p-button.p-button-icon-only {
    width: 2.857rem;
    padding: 0.5rem 0;
  }
  .p-button.p-button-icon-only .p-button-icon-left,
  .p-button.p-button-icon-only .p-button-icon-right {
    margin: 0;
  }
  .p-button.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: 2.857rem;
  }
  .p-button.p-button-sm {
    font-size: 0.875rem;
    padding: 0.4375rem 0.875rem;
  }
  .p-button.p-button-sm .p-button-icon {
    font-size: 0.875rem;
  }
  .p-button.p-button-lg {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
  }
  .p-button.p-button-lg .p-button-icon {
    font-size: 1.25rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-left .p-button-label {
    margin-left: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-right .p-button-label {
    margin-right: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-top .p-button-label {
    margin-top: 0.5rem;
  }
  .p-button.p-button-loading-label-only.p-button-loading-bottom
    .p-button-label {
    margin-bottom: 0.5rem;
  }
  .p-button.p-button-loading-label-only .p-button-loading-icon {
    margin: 0;
  }

  .p-fluid .p-button {
    width: 100%;
  }
  .p-fluid .p-button-icon-only {
    width: 2.857rem;
  }
  .p-fluid .p-buttonset {
    display: flex;
  }
  .p-fluid .p-buttonset .p-button {
    flex: 1;
  }

  .p-button.p-button-secondary,
  .p-buttonset.p-button-secondary > .p-button,
  .p-splitbutton.p-button-secondary > .p-button,
  .p-fileupload-choose.p-button-secondary {
    color: #ffffff;
    background: #8191a6;
    border: 1px solid #8191a6;
  }
  .p-button.p-button-secondary:enabled:hover,
  .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):hover,
  .p-buttonset.p-button-secondary > .p-button:enabled:hover,
  .p-buttonset.p-button-secondary
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-secondary > .p-button:enabled:hover,
  .p-splitbutton.p-button-secondary
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-secondary:enabled:hover,
  .p-fileupload-choose.p-button-secondary:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: #70829a;
    color: #ffffff;
    border-color: #70829a;
  }
  .p-button.p-button-secondary:enabled:focus,
  .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):focus,
  .p-buttonset.p-button-secondary > .p-button:enabled:focus,
  .p-buttonset.p-button-secondary
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-splitbutton.p-button-secondary > .p-button:enabled:focus,
  .p-splitbutton.p-button-secondary
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-fileupload-choose.p-button-secondary:enabled:focus,
  .p-fileupload-choose.p-button-secondary:not(button):not(a):not(
      .p-disabled
    ):focus {
    box-shadow: 0 0 0 0.1rem #cdd3db;
  }
  .p-button.p-button-secondary:enabled:active,
  .p-button.p-button-secondary:not(button):not(a):not(.p-disabled):active,
  .p-buttonset.p-button-secondary > .p-button:enabled:active,
  .p-buttonset.p-button-secondary
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-secondary > .p-button:enabled:active,
  .p-splitbutton.p-button-secondary
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-secondary:enabled:active,
  .p-fileupload-choose.p-button-secondary:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #62738a;
    color: #ffffff;
    border-color: #62738a;
  }
  .p-button.p-button-secondary.p-button-outlined,
  .p-buttonset.p-button-secondary > .p-button.p-button-outlined,
  .p-splitbutton.p-button-secondary > .p-button.p-button-outlined,
  .p-fileupload-choose.p-button-secondary.p-button-outlined {
    background-color: transparent;
    color: #8191a6;
    border: 2px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:enabled:hover,
  .p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:hover,
  .p-buttonset.p-button-secondary
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-secondary > .p-button.p-button-outlined:enabled:hover,
  .p-splitbutton.p-button-secondary
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:hover,
  .p-fileupload-choose.p-button-secondary.p-button-outlined:not(button):not(
      a
    ):not(.p-disabled):hover {
    background: rgba(129, 145, 166, 0.04);
    color: #8191a6;
    border: 2px solid;
  }
  .p-button.p-button-secondary.p-button-outlined:enabled:active,
  .p-button.p-button-secondary.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-secondary > .p-button.p-button-outlined:enabled:active,
  .p-buttonset.p-button-secondary
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-secondary
    > .p-button.p-button-outlined:enabled:active,
  .p-splitbutton.p-button-secondary
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-secondary.p-button-outlined:enabled:active,
  .p-fileupload-choose.p-button-secondary.p-button-outlined:not(button):not(
      a
    ):not(.p-disabled):active {
    background: rgba(129, 145, 166, 0.16);
    color: #8191a6;
    border: 2px solid;
  }
  .p-button.p-button-secondary.p-button-text,
  .p-buttonset.p-button-secondary > .p-button.p-button-text,
  .p-splitbutton.p-button-secondary > .p-button.p-button-text,
  .p-fileupload-choose.p-button-secondary.p-button-text {
    background-color: transparent;
    color: #8191a6;
    border-color: transparent;
  }
  .p-button.p-button-secondary.p-button-text:enabled:hover,
  .p-button.p-button-secondary.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:hover,
  .p-buttonset.p-button-secondary
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:hover,
  .p-splitbutton.p-button-secondary
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-secondary.p-button-text:enabled:hover,
  .p-fileupload-choose.p-button-secondary.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(129, 145, 166, 0.04);
    border-color: transparent;
    color: #8191a6;
  }
  .p-button.p-button-secondary.p-button-text:enabled:active,
  .p-button.p-button-secondary.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-secondary > .p-button.p-button-text:enabled:active,
  .p-buttonset.p-button-secondary
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-secondary > .p-button.p-button-text:enabled:active,
  .p-splitbutton.p-button-secondary
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-secondary.p-button-text:enabled:active,
  .p-fileupload-choose.p-button-secondary.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(129, 145, 166, 0.16);
    border-color: transparent;
    color: #8191a6;
  }

  .p-button.p-button-info,
  .p-buttonset.p-button-info > .p-button,
  .p-splitbutton.p-button-info > .p-button,
  .p-fileupload-choose.p-button-info {
    color: #ffffff;
    background: #35a4cc;
    border: 1px solid #35a4cc;
  }
  .p-button.p-button-info:enabled:hover,
  .p-button.p-button-info:not(button):not(a):not(.p-disabled):hover,
  .p-buttonset.p-button-info > .p-button:enabled:hover,
  .p-buttonset.p-button-info
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-info > .p-button:enabled:hover,
  .p-splitbutton.p-button-info
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-info:enabled:hover,
  .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):hover {
    background: #2f94b9;
    color: #ffffff;
    border-color: #2f94b9;
  }
  .p-button.p-button-info:enabled:focus,
  .p-button.p-button-info:not(button):not(a):not(.p-disabled):focus,
  .p-buttonset.p-button-info > .p-button:enabled:focus,
  .p-buttonset.p-button-info
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-splitbutton.p-button-info > .p-button:enabled:focus,
  .p-splitbutton.p-button-info
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-fileupload-choose.p-button-info:enabled:focus,
  .p-fileupload-choose.p-button-info:not(button):not(a):not(.p-disabled):focus {
    box-shadow: 0 0 0 0.1rem #aedbeb;
  }
  .p-button.p-button-info:enabled:active,
  .p-button.p-button-info:not(button):not(a):not(.p-disabled):active,
  .p-buttonset.p-button-info > .p-button:enabled:active,
  .p-buttonset.p-button-info
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-info > .p-button:enabled:active,
  .p-splitbutton.p-button-info
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-info:enabled:active,
  .p-fileupload-choose.p-button-info:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #2984a4;
    color: #ffffff;
    border-color: #2984a4;
  }
  .p-button.p-button-info.p-button-outlined,
  .p-buttonset.p-button-info > .p-button.p-button-outlined,
  .p-splitbutton.p-button-info > .p-button.p-button-outlined,
  .p-fileupload-choose.p-button-info.p-button-outlined {
    background-color: transparent;
    color: #35a4cc;
    border: 2px solid;
  }
  .p-button.p-button-info.p-button-outlined:enabled:hover,
  .p-button.p-button-info.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:hover,
  .p-buttonset.p-button-info
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:hover,
  .p-splitbutton.p-button-info
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-info.p-button-outlined:enabled:hover,
  .p-fileupload-choose.p-button-info.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(53, 164, 204, 0.04);
    color: #35a4cc;
    border: 2px solid;
  }
  .p-button.p-button-info.p-button-outlined:enabled:active,
  .p-button.p-button-info.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-info > .p-button.p-button-outlined:enabled:active,
  .p-buttonset.p-button-info
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-info > .p-button.p-button-outlined:enabled:active,
  .p-splitbutton.p-button-info
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-info.p-button-outlined:enabled:active,
  .p-fileupload-choose.p-button-info.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(53, 164, 204, 0.16);
    color: #35a4cc;
    border: 2px solid;
  }
  .p-button.p-button-info.p-button-text,
  .p-buttonset.p-button-info > .p-button.p-button-text,
  .p-splitbutton.p-button-info > .p-button.p-button-text,
  .p-fileupload-choose.p-button-info.p-button-text {
    background-color: transparent;
    color: #35a4cc;
    border-color: transparent;
  }
  .p-button.p-button-info.p-button-text:enabled:hover,
  .p-button.p-button-info.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-info > .p-button.p-button-text:enabled:hover,
  .p-buttonset.p-button-info
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:hover,
  .p-splitbutton.p-button-info
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-info.p-button-text:enabled:hover,
  .p-fileupload-choose.p-button-info.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(53, 164, 204, 0.04);
    border-color: transparent;
    color: #35a4cc;
  }
  .p-button.p-button-info.p-button-text:enabled:active,
  .p-button.p-button-info.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-info > .p-button.p-button-text:enabled:active,
  .p-buttonset.p-button-info
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-info > .p-button.p-button-text:enabled:active,
  .p-splitbutton.p-button-info
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-info.p-button-text:enabled:active,
  .p-fileupload-choose.p-button-info.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(53, 164, 204, 0.16);
    border-color: transparent;
    color: #35a4cc;
  }

  .p-button.p-button-success,
  .p-buttonset.p-button-success > .p-button,
  .p-splitbutton.p-button-success > .p-button,
  .p-fileupload-choose.p-button-success {
    color: #ffffff;
    background: #8bae2c;
    border: 1px solid #8bae2c;
  }
  .p-button.p-button-success:enabled:hover,
  .p-button.p-button-success:not(button):not(a):not(.p-disabled):hover,
  .p-buttonset.p-button-success > .p-button:enabled:hover,
  .p-buttonset.p-button-success
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-success > .p-button:enabled:hover,
  .p-splitbutton.p-button-success
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-success:enabled:hover,
  .p-fileupload-choose.p-button-success:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: #7d9d28;
    color: #ffffff;
    border-color: #7d9d28;
  }
  .p-button.p-button-success:enabled:focus,
  .p-button.p-button-success:not(button):not(a):not(.p-disabled):focus,
  .p-buttonset.p-button-success > .p-button:enabled:focus,
  .p-buttonset.p-button-success
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-splitbutton.p-button-success > .p-button:enabled:focus,
  .p-splitbutton.p-button-success
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-fileupload-choose.p-button-success:enabled:focus,
  .p-fileupload-choose.p-button-success:not(button):not(a):not(
      .p-disabled
    ):focus {
    box-shadow: 0 0 0 0.1rem #d5e7a2;
  }
  .p-button.p-button-success:enabled:active,
  .p-button.p-button-success:not(button):not(a):not(.p-disabled):active,
  .p-buttonset.p-button-success > .p-button:enabled:active,
  .p-buttonset.p-button-success
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-success > .p-button:enabled:active,
  .p-splitbutton.p-button-success
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-success:enabled:active,
  .p-fileupload-choose.p-button-success:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #6f8b23;
    color: #ffffff;
    border-color: #6f8b23;
  }
  .p-button.p-button-success.p-button-outlined,
  .p-buttonset.p-button-success > .p-button.p-button-outlined,
  .p-splitbutton.p-button-success > .p-button.p-button-outlined,
  .p-fileupload-choose.p-button-success.p-button-outlined {
    background-color: transparent;
    color: #8bae2c;
    border: 2px solid;
  }
  .p-button.p-button-success.p-button-outlined:enabled:hover,
  .p-button.p-button-success.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:hover,
  .p-buttonset.p-button-success
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:hover,
  .p-splitbutton.p-button-success
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-success.p-button-outlined:enabled:hover,
  .p-fileupload-choose.p-button-success.p-button-outlined:not(button):not(
      a
    ):not(.p-disabled):hover {
    background: rgba(139, 174, 44, 0.04);
    color: #8bae2c;
    border: 2px solid;
  }
  .p-button.p-button-success.p-button-outlined:enabled:active,
  .p-button.p-button-success.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-success > .p-button.p-button-outlined:enabled:active,
  .p-buttonset.p-button-success
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-success > .p-button.p-button-outlined:enabled:active,
  .p-splitbutton.p-button-success
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-success.p-button-outlined:enabled:active,
  .p-fileupload-choose.p-button-success.p-button-outlined:not(button):not(
      a
    ):not(.p-disabled):active {
    background: rgba(139, 174, 44, 0.16);
    color: #8bae2c;
    border: 2px solid;
  }
  .p-button.p-button-success.p-button-text,
  .p-buttonset.p-button-success > .p-button.p-button-text,
  .p-splitbutton.p-button-success > .p-button.p-button-text,
  .p-fileupload-choose.p-button-success.p-button-text {
    background-color: transparent;
    color: #8bae2c;
    border-color: transparent;
  }
  .p-button.p-button-success.p-button-text:enabled:hover,
  .p-button.p-button-success.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-success > .p-button.p-button-text:enabled:hover,
  .p-buttonset.p-button-success
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:hover,
  .p-splitbutton.p-button-success
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-success.p-button-text:enabled:hover,
  .p-fileupload-choose.p-button-success.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(139, 174, 44, 0.04);
    border-color: transparent;
    color: #8bae2c;
  }
  .p-button.p-button-success.p-button-text:enabled:active,
  .p-button.p-button-success.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-success > .p-button.p-button-text:enabled:active,
  .p-buttonset.p-button-success
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-success > .p-button.p-button-text:enabled:active,
  .p-splitbutton.p-button-success
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-success.p-button-text:enabled:active,
  .p-fileupload-choose.p-button-success.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(139, 174, 44, 0.16);
    border-color: transparent;
    color: #8bae2c;
  }

  .p-button.p-button-warning,
  .p-buttonset.p-button-warning > .p-button,
  .p-splitbutton.p-button-warning > .p-button,
  .p-fileupload-choose.p-button-warning {
    color: #ffffff;
    background: #ff922a;
    border: 1px solid #ff922a;
  }
  .p-button.p-button-warning:enabled:hover,
  .p-button.p-button-warning:not(button):not(a):not(.p-disabled):hover,
  .p-buttonset.p-button-warning > .p-button:enabled:hover,
  .p-buttonset.p-button-warning
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-warning > .p-button:enabled:hover,
  .p-splitbutton.p-button-warning
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-warning:enabled:hover,
  .p-fileupload-choose.p-button-warning:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: #ff830c;
    color: #ffffff;
    border-color: #ff830c;
  }
  .p-button.p-button-warning:enabled:focus,
  .p-button.p-button-warning:not(button):not(a):not(.p-disabled):focus,
  .p-buttonset.p-button-warning > .p-button:enabled:focus,
  .p-buttonset.p-button-warning
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-splitbutton.p-button-warning > .p-button:enabled:focus,
  .p-splitbutton.p-button-warning
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-fileupload-choose.p-button-warning:enabled:focus,
  .p-fileupload-choose.p-button-warning:not(button):not(a):not(
      .p-disabled
    ):focus {
    box-shadow: 0 0 0 0.1rem #ffd3aa;
  }
  .p-button.p-button-warning:enabled:active,
  .p-button.p-button-warning:not(button):not(a):not(.p-disabled):active,
  .p-buttonset.p-button-warning > .p-button:enabled:active,
  .p-buttonset.p-button-warning
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-warning > .p-button:enabled:active,
  .p-splitbutton.p-button-warning
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-warning:enabled:active,
  .p-fileupload-choose.p-button-warning:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #ee7400;
    color: #ffffff;
    border-color: #ee7400;
  }
  .p-button.p-button-warning.p-button-outlined,
  .p-buttonset.p-button-warning > .p-button.p-button-outlined,
  .p-splitbutton.p-button-warning > .p-button.p-button-outlined,
  .p-fileupload-choose.p-button-warning.p-button-outlined {
    background-color: transparent;
    color: #ff922a;
    border: 2px solid;
  }
  .p-button.p-button-warning.p-button-outlined:enabled:hover,
  .p-button.p-button-warning.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:hover,
  .p-buttonset.p-button-warning
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:hover,
  .p-splitbutton.p-button-warning
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:hover,
  .p-fileupload-choose.p-button-warning.p-button-outlined:not(button):not(
      a
    ):not(.p-disabled):hover {
    background: rgba(255, 146, 42, 0.04);
    color: #ff922a;
    border: 2px solid;
  }
  .p-button.p-button-warning.p-button-outlined:enabled:active,
  .p-button.p-button-warning.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-warning > .p-button.p-button-outlined:enabled:active,
  .p-buttonset.p-button-warning
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-warning > .p-button.p-button-outlined:enabled:active,
  .p-splitbutton.p-button-warning
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-warning.p-button-outlined:enabled:active,
  .p-fileupload-choose.p-button-warning.p-button-outlined:not(button):not(
      a
    ):not(.p-disabled):active {
    background: rgba(255, 146, 42, 0.16);
    color: #ff922a;
    border: 2px solid;
  }
  .p-button.p-button-warning.p-button-text,
  .p-buttonset.p-button-warning > .p-button.p-button-text,
  .p-splitbutton.p-button-warning > .p-button.p-button-text,
  .p-fileupload-choose.p-button-warning.p-button-text {
    background-color: transparent;
    color: #ff922a;
    border-color: transparent;
  }
  .p-button.p-button-warning.p-button-text:enabled:hover,
  .p-button.p-button-warning.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:hover,
  .p-buttonset.p-button-warning
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:hover,
  .p-splitbutton.p-button-warning
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-warning.p-button-text:enabled:hover,
  .p-fileupload-choose.p-button-warning.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(255, 146, 42, 0.04);
    border-color: transparent;
    color: #ff922a;
  }
  .p-button.p-button-warning.p-button-text:enabled:active,
  .p-button.p-button-warning.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-warning > .p-button.p-button-text:enabled:active,
  .p-buttonset.p-button-warning
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-warning > .p-button.p-button-text:enabled:active,
  .p-splitbutton.p-button-warning
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-warning.p-button-text:enabled:active,
  .p-fileupload-choose.p-button-warning.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(255, 146, 42, 0.16);
    border-color: transparent;
    color: #ff922a;
  }

  .p-button.p-button-help,
  .p-buttonset.p-button-help > .p-button,
  .p-splitbutton.p-button-help > .p-button,
  .p-fileupload-choose.p-button-help {
    color: #ffffff;
    background: #7654d4;
    border: 1px solid #7654d4;
  }
  .p-button.p-button-help:enabled:hover,
  .p-button.p-button-help:not(button):not(a):not(.p-disabled):hover,
  .p-buttonset.p-button-help > .p-button:enabled:hover,
  .p-buttonset.p-button-help
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-help > .p-button:enabled:hover,
  .p-splitbutton.p-button-help
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-help:enabled:hover,
  .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):hover {
    background: #633cce;
    color: #ffffff;
    border-color: #633cce;
  }
  .p-button.p-button-help:enabled:focus,
  .p-button.p-button-help:not(button):not(a):not(.p-disabled):focus,
  .p-buttonset.p-button-help > .p-button:enabled:focus,
  .p-buttonset.p-button-help
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-splitbutton.p-button-help > .p-button:enabled:focus,
  .p-splitbutton.p-button-help
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-fileupload-choose.p-button-help:enabled:focus,
  .p-fileupload-choose.p-button-help:not(button):not(a):not(.p-disabled):focus {
    box-shadow: 0 0 0 0.1rem #c8bbee;
  }
  .p-button.p-button-help:enabled:active,
  .p-button.p-button-help:not(button):not(a):not(.p-disabled):active,
  .p-buttonset.p-button-help > .p-button:enabled:active,
  .p-buttonset.p-button-help
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-help > .p-button:enabled:active,
  .p-splitbutton.p-button-help
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-help:enabled:active,
  .p-fileupload-choose.p-button-help:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #5530bd;
    color: #ffffff;
    border-color: #5530bd;
  }
  .p-button.p-button-help.p-button-outlined,
  .p-buttonset.p-button-help > .p-button.p-button-outlined,
  .p-splitbutton.p-button-help > .p-button.p-button-outlined,
  .p-fileupload-choose.p-button-help.p-button-outlined {
    background-color: transparent;
    color: #7654d4;
    border: 2px solid;
  }
  .p-button.p-button-help.p-button-outlined:enabled:hover,
  .p-button.p-button-help.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:hover,
  .p-buttonset.p-button-help
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:hover,
  .p-splitbutton.p-button-help
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-help.p-button-outlined:enabled:hover,
  .p-fileupload-choose.p-button-help.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(118, 84, 212, 0.04);
    color: #7654d4;
    border: 2px solid;
  }
  .p-button.p-button-help.p-button-outlined:enabled:active,
  .p-button.p-button-help.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-help > .p-button.p-button-outlined:enabled:active,
  .p-buttonset.p-button-help
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-help > .p-button.p-button-outlined:enabled:active,
  .p-splitbutton.p-button-help
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-help.p-button-outlined:enabled:active,
  .p-fileupload-choose.p-button-help.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(118, 84, 212, 0.16);
    color: #7654d4;
    border: 2px solid;
  }
  .p-button.p-button-help.p-button-text,
  .p-buttonset.p-button-help > .p-button.p-button-text,
  .p-splitbutton.p-button-help > .p-button.p-button-text,
  .p-fileupload-choose.p-button-help.p-button-text {
    background-color: transparent;
    color: #7654d4;
    border-color: transparent;
  }
  .p-button.p-button-help.p-button-text:enabled:hover,
  .p-button.p-button-help.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-help > .p-button.p-button-text:enabled:hover,
  .p-buttonset.p-button-help
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:hover,
  .p-splitbutton.p-button-help
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-help.p-button-text:enabled:hover,
  .p-fileupload-choose.p-button-help.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(118, 84, 212, 0.04);
    border-color: transparent;
    color: #7654d4;
  }
  .p-button.p-button-help.p-button-text:enabled:active,
  .p-button.p-button-help.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-help > .p-button.p-button-text:enabled:active,
  .p-buttonset.p-button-help
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-help > .p-button.p-button-text:enabled:active,
  .p-splitbutton.p-button-help
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-help.p-button-text:enabled:active,
  .p-fileupload-choose.p-button-help.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(118, 84, 212, 0.16);
    border-color: transparent;
    color: #7654d4;
  }

  .p-button.p-button-danger,
  .p-buttonset.p-button-danger > .p-button,
  .p-splitbutton.p-button-danger > .p-button,
  .p-fileupload-choose.p-button-danger {
    color: #ffffff;
    background: #d45472;
    border: 1px solid #d45472;
  }
  .p-button.p-button-danger:enabled:hover,
  .p-button.p-button-danger:not(button):not(a):not(.p-disabled):hover,
  .p-buttonset.p-button-danger > .p-button:enabled:hover,
  .p-buttonset.p-button-danger
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-danger > .p-button:enabled:hover,
  .p-splitbutton.p-button-danger
    > .p-button:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-danger:enabled:hover,
  .p-fileupload-choose.p-button-danger:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: #ce3c5e;
    color: #ffffff;
    border-color: #ce3c5e;
  }
  .p-button.p-button-danger:enabled:focus,
  .p-button.p-button-danger:not(button):not(a):not(.p-disabled):focus,
  .p-buttonset.p-button-danger > .p-button:enabled:focus,
  .p-buttonset.p-button-danger
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-splitbutton.p-button-danger > .p-button:enabled:focus,
  .p-splitbutton.p-button-danger
    > .p-button:not(button):not(a):not(.p-disabled):focus,
  .p-fileupload-choose.p-button-danger:enabled:focus,
  .p-fileupload-choose.p-button-danger:not(button):not(a):not(
      .p-disabled
    ):focus {
    box-shadow: 0 0 0 0.1rem #eebbc7;
  }
  .p-button.p-button-danger:enabled:active,
  .p-button.p-button-danger:not(button):not(a):not(.p-disabled):active,
  .p-buttonset.p-button-danger > .p-button:enabled:active,
  .p-buttonset.p-button-danger
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-danger > .p-button:enabled:active,
  .p-splitbutton.p-button-danger
    > .p-button:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-danger:enabled:active,
  .p-fileupload-choose.p-button-danger:not(button):not(a):not(
      .p-disabled
    ):active {
    background: #bd3051;
    color: #ffffff;
    border-color: #bd3051;
  }
  .p-button.p-button-danger.p-button-outlined,
  .p-buttonset.p-button-danger > .p-button.p-button-outlined,
  .p-splitbutton.p-button-danger > .p-button.p-button-outlined,
  .p-fileupload-choose.p-button-danger.p-button-outlined {
    background-color: transparent;
    color: #d45472;
    border: 2px solid;
  }
  .p-button.p-button-danger.p-button-outlined:enabled:hover,
  .p-button.p-button-danger.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:hover,
  .p-buttonset.p-button-danger
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:hover,
  .p-splitbutton.p-button-danger
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:hover,
  .p-fileupload-choose.p-button-danger.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(212, 84, 114, 0.04);
    color: #d45472;
    border: 2px solid;
  }
  .p-button.p-button-danger.p-button-outlined:enabled:active,
  .p-button.p-button-danger.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-danger > .p-button.p-button-outlined:enabled:active,
  .p-buttonset.p-button-danger
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-danger > .p-button.p-button-outlined:enabled:active,
  .p-splitbutton.p-button-danger
    > .p-button.p-button-outlined:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-danger.p-button-outlined:enabled:active,
  .p-fileupload-choose.p-button-danger.p-button-outlined:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(212, 84, 114, 0.16);
    color: #d45472;
    border: 2px solid;
  }
  .p-button.p-button-danger.p-button-text,
  .p-buttonset.p-button-danger > .p-button.p-button-text,
  .p-splitbutton.p-button-danger > .p-button.p-button-text,
  .p-fileupload-choose.p-button-danger.p-button-text {
    background-color: transparent;
    color: #d45472;
    border-color: transparent;
  }
  .p-button.p-button-danger.p-button-text:enabled:hover,
  .p-button.p-button-danger.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover,
  .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:hover,
  .p-buttonset.p-button-danger
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:hover,
  .p-splitbutton.p-button-danger
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):hover,
  .p-fileupload-choose.p-button-danger.p-button-text:enabled:hover,
  .p-fileupload-choose.p-button-danger.p-button-text:not(button):not(a):not(
      .p-disabled
    ):hover {
    background: rgba(212, 84, 114, 0.04);
    border-color: transparent;
    color: #d45472;
  }
  .p-button.p-button-danger.p-button-text:enabled:active,
  .p-button.p-button-danger.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active,
  .p-buttonset.p-button-danger > .p-button.p-button-text:enabled:active,
  .p-buttonset.p-button-danger
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-splitbutton.p-button-danger > .p-button.p-button-text:enabled:active,
  .p-splitbutton.p-button-danger
    > .p-button.p-button-text:not(button):not(a):not(.p-disabled):active,
  .p-fileupload-choose.p-button-danger.p-button-text:enabled:active,
  .p-fileupload-choose.p-button-danger.p-button-text:not(button):not(a):not(
      .p-disabled
    ):active {
    background: rgba(212, 84, 114, 0.16);
    border-color: transparent;
    color: #d45472;
  }

  .p-button.p-button-link {
    color: #3c5ece;
    background: transparent;
    border: transparent;
  }
  .p-button.p-button-link:enabled:hover,
  .p-button.p-button-link:not(button):not(a):not(.p-disabled):hover {
    background: transparent;
    color: #3c5ece;
    border-color: transparent;
  }
  .p-button.p-button-link:enabled:hover .p-button-label,
  .p-button.p-button-link:not(button):not(a):not(.p-disabled):hover
    .p-button-label {
    text-decoration: underline;
  }
  .p-button.p-button-link:enabled:focus,
  .p-button.p-button-link:not(button):not(a):not(.p-disabled):focus {
    background: transparent;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    border-color: transparent;
  }
  .p-button.p-button-link:enabled:active,
  .p-button.p-button-link:not(button):not(a):not(.p-disabled):active {
    background: transparent;
    color: #3c5ece;
    border-color: transparent;
  }

  .p-splitbutton {
    border-radius: 6px;
  }
  .p-splitbutton.p-button-outlined > .p-button {
    background-color: transparent;
    color: #5472d4;
    border: 2px solid;
  }
  .p-splitbutton.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(84, 114, 212, 0.04);
    color: #5472d4;
  }
  .p-splitbutton.p-button-outlined > .p-button:enabled:active,
  .p-splitbutton.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(84, 114, 212, 0.16);
    color: #5472d4;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button {
    color: #898989;
    border-color: #898989;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:hover,
  .p-splitbutton.p-button-outlined.p-button-plain
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: #edf0fa;
    color: #898989;
  }
  .p-splitbutton.p-button-outlined.p-button-plain > .p-button:enabled:active,
  .p-splitbutton.p-button-outlined.p-button-plain
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: #ebebeb;
    color: #898989;
  }
  .p-splitbutton.p-button-text > .p-button {
    background-color: transparent;
    color: #5472d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(84, 114, 212, 0.04);
    color: #5472d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(84, 114, 212, 0.16);
    color: #5472d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button {
    color: #898989;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:hover,
  .p-splitbutton.p-button-text.p-button-plain
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: #edf0fa;
    color: #898989;
  }
  .p-splitbutton.p-button-text.p-button-plain > .p-button:enabled:active,
  .p-splitbutton.p-button-text.p-button-plain
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: #ebebeb;
    color: #898989;
  }
  .p-splitbutton.p-button-raised {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  }
  .p-splitbutton.p-button-rounded {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-rounded > .p-button {
    border-radius: 2rem;
  }
  .p-splitbutton.p-button-sm > .p-button {
    font-size: 0.875rem;
    padding: 0.4375rem 0.875rem;
  }
  .p-splitbutton.p-button-sm > .p-button .p-button-icon {
    font-size: 0.875rem;
  }
  .p-splitbutton.p-button-lg > .p-button {
    font-size: 1.25rem;
    padding: 0.625rem 1.25rem;
  }
  .p-splitbutton.p-button-lg > .p-button.p-button-icon-only {
    width: auto;
  }
  .p-splitbutton.p-button-lg > .p-button .p-button-icon {
    font-size: 1.25rem;
  }

  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button {
    background-color: transparent;
    color: #8191a6;
    border: 2px solid;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-secondary.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(129, 145, 166, 0.04);
    color: #8191a6;
  }
  .p-splitbutton.p-button-secondary.p-button-outlined
    > .p-button:enabled:active,
  .p-splitbutton.p-button-secondary.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(129, 145, 166, 0.16);
    color: #8191a6;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button {
    background-color: transparent;
    color: #8191a6;
    border-color: transparent;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-secondary.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(129, 145, 166, 0.04);
    border-color: transparent;
    color: #8191a6;
  }
  .p-splitbutton.p-button-secondary.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-secondary.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(129, 145, 166, 0.16);
    border-color: transparent;
    color: #8191a6;
  }

  .p-splitbutton.p-button-info.p-button-outlined > .p-button {
    background-color: transparent;
    color: #35a4cc;
    border: 2px solid;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-info.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(53, 164, 204, 0.04);
    color: #35a4cc;
  }
  .p-splitbutton.p-button-info.p-button-outlined > .p-button:enabled:active,
  .p-splitbutton.p-button-info.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(53, 164, 204, 0.16);
    color: #35a4cc;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button {
    background-color: transparent;
    color: #35a4cc;
    border-color: transparent;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-info.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(53, 164, 204, 0.04);
    border-color: transparent;
    color: #35a4cc;
  }
  .p-splitbutton.p-button-info.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-info.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(53, 164, 204, 0.16);
    border-color: transparent;
    color: #35a4cc;
  }

  .p-splitbutton.p-button-success.p-button-outlined > .p-button {
    background-color: transparent;
    color: #8bae2c;
    border: 2px solid;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-success.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(139, 174, 44, 0.04);
    color: #8bae2c;
  }
  .p-splitbutton.p-button-success.p-button-outlined > .p-button:enabled:active,
  .p-splitbutton.p-button-success.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(139, 174, 44, 0.16);
    color: #8bae2c;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button {
    background-color: transparent;
    color: #8bae2c;
    border-color: transparent;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-success.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(139, 174, 44, 0.04);
    border-color: transparent;
    color: #8bae2c;
  }
  .p-splitbutton.p-button-success.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-success.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(139, 174, 44, 0.16);
    border-color: transparent;
    color: #8bae2c;
  }

  .p-splitbutton.p-button-warning.p-button-outlined > .p-button {
    background-color: transparent;
    color: #ff922a;
    border: 2px solid;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-warning.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(255, 146, 42, 0.04);
    color: #ff922a;
  }
  .p-splitbutton.p-button-warning.p-button-outlined > .p-button:enabled:active,
  .p-splitbutton.p-button-warning.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(255, 146, 42, 0.16);
    color: #ff922a;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button {
    background-color: transparent;
    color: #ff922a;
    border-color: transparent;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-warning.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(255, 146, 42, 0.04);
    border-color: transparent;
    color: #ff922a;
  }
  .p-splitbutton.p-button-warning.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-warning.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(255, 146, 42, 0.16);
    border-color: transparent;
    color: #ff922a;
  }

  .p-splitbutton.p-button-help.p-button-outlined > .p-button {
    background-color: transparent;
    color: #7654d4;
    border: 2px solid;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-help.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(118, 84, 212, 0.04);
    color: #7654d4;
  }
  .p-splitbutton.p-button-help.p-button-outlined > .p-button:enabled:active,
  .p-splitbutton.p-button-help.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(118, 84, 212, 0.16);
    color: #7654d4;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button {
    background-color: transparent;
    color: #7654d4;
    border-color: transparent;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-help.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(118, 84, 212, 0.04);
    border-color: transparent;
    color: #7654d4;
  }
  .p-splitbutton.p-button-help.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-help.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(118, 84, 212, 0.16);
    border-color: transparent;
    color: #7654d4;
  }

  .p-splitbutton.p-button-danger.p-button-outlined > .p-button {
    background-color: transparent;
    color: #d45472;
    border: 2px solid;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:hover,
  .p-splitbutton.p-button-danger.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(212, 84, 114, 0.04);
    color: #d45472;
  }
  .p-splitbutton.p-button-danger.p-button-outlined > .p-button:enabled:active,
  .p-splitbutton.p-button-danger.p-button-outlined
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(212, 84, 114, 0.16);
    color: #d45472;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button {
    background-color: transparent;
    color: #d45472;
    border-color: transparent;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:hover,
  .p-splitbutton.p-button-danger.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):hover {
    background: rgba(212, 84, 114, 0.04);
    border-color: transparent;
    color: #d45472;
  }
  .p-splitbutton.p-button-danger.p-button-text > .p-button:enabled:active,
  .p-splitbutton.p-button-danger.p-button-text
    > .p-button:not(button):not(a):not(.p-disabled):active {
    background: rgba(212, 84, 114, 0.16);
    border-color: transparent;
    color: #d45472;
  }

  .p-speeddial-button.p-button.p-button-icon-only {
    width: 4rem;
    height: 4rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon {
    font-size: 1.3rem;
  }
  .p-speeddial-button.p-button.p-button-icon-only .p-button-icon.p-icon {
    width: 1.3rem;
    height: 1.3rem;
  }

  .p-speeddial-action {
    width: 3rem;
    height: 3rem;
    background: #6c6c6c;
    color: #fff;
  }
  .p-speeddial-action:hover {
    background: #585858;
    color: #fff;
  }

  .p-speeddial-direction-up .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-up .p-speeddial-item:first-child {
    margin-bottom: 0.5rem;
  }

  .p-speeddial-direction-down .p-speeddial-item {
    margin: 0.25rem;
  }
  .p-speeddial-direction-down .p-speeddial-item:first-child {
    margin-top: 0.5rem;
  }

  .p-speeddial-direction-left .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-left .p-speeddial-item:first-child {
    margin-right: 0.5rem;
  }

  .p-speeddial-direction-right .p-speeddial-item {
    margin: 0 0.25rem;
  }
  .p-speeddial-direction-right .p-speeddial-item:first-child {
    margin-left: 0.5rem;
  }

  .p-speeddial-circle .p-speeddial-item,
  .p-speeddial-semi-circle .p-speeddial-item,
  .p-speeddial-quarter-circle .p-speeddial-item {
    margin: 0;
  }
  .p-speeddial-circle .p-speeddial-item:first-child,
  .p-speeddial-circle .p-speeddial-item:last-child,
  .p-speeddial-semi-circle .p-speeddial-item:first-child,
  .p-speeddial-semi-circle .p-speeddial-item:last-child,
  .p-speeddial-quarter-circle .p-speeddial-item:first-child,
  .p-speeddial-quarter-circle .p-speeddial-item:last-child {
    margin: 0;
  }

  .p-speeddial-mask {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .p-carousel .p-carousel-content .p-carousel-prev,
  .p-carousel .p-carousel-content .p-carousel-next {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    margin: 0.5rem;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:enabled:hover,
  .p-carousel .p-carousel-content .p-carousel-next:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-carousel .p-carousel-content .p-carousel-prev:focus,
  .p-carousel .p-carousel-content .p-carousel-next:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-carousel .p-carousel-indicators {
    padding: 1rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator {
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button {
    background-color: #edf0fa;
    width: 2rem;
    height: 0.5rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    border-radius: 0;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator button:hover {
    background: #ebebeb;
  }
  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background: #ced6f1;
    color: #585858;
  }

  .p-datatable .p-paginator-top {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-datatable .p-paginator-bottom {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-datatable .p-datatable-header {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datatable .p-datatable-footer {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datatable .p-datatable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    font-weight: 600;
    color: #6c6c6c;
    background: #ffffff;
    transition: box-shadow 0.3s;
    
  }
  .p-datatable .p-datatable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    font-weight: 600;
    color: #6c6c6c;
    background: #ffffff;
  }
  .p-datatable .p-sortable-column .p-sortable-column-icon {
    color: #898989;
    margin-left: 0.5rem;
  }
  .p-datatable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #585858;
    background: #ced6f1;
    margin-left: 0.5rem;
  }
  .p-datatable
    .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-datatable
    .p-sortable-column:not(.p-highlight):not(.p-sortable-disabled):hover
    .p-sortable-column-icon {
    color: #898989;
  }
  .p-datatable .p-sortable-column.p-highlight {
    background: #ffffff;
    color: #5472d4;
  }
  .p-datatable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #5472d4;
  }
  .p-datatable .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover {
    background: #edf0fa;
    color: #5472d4;
  }
  .p-datatable
    .p-sortable-column.p-highlight:not(.p-sortable-disabled):hover
    .p-sortable-column-icon {
    color: #5472d4;
    
  }
  .p-datatable .p-sortable-column:focus {
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
    outline: 0 none;
  }
  .p-datatable .p-datatable-tbody > tr {
    background: #ffffff;
    color: #6c6c6c;
    transition: box-shadow 0.3s;
  }
  .p-datatable .p-datatable-tbody > tr > td {
    text-align: left;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:enabled:hover,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:enabled:hover,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:enabled:hover,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-toggler:focus,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-init:focus,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save:focus,
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-cancel:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-datatable .p-datatable-tbody > tr > td .p-row-editor-save {
    margin-right: 0.5rem;
  }
  .p-datatable .p-datatable-tbody > tr > td > .p-column-title {
    font-weight: 600;
  }
  .p-datatable .p-datatable-tbody > tr > td.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-datatable .p-datatable-tbody > tr.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 #ced6f1;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 #ced6f1;
  }
  .p-datatable.p-datatable-selectable
    .p-datatable-tbody
    > tr.p-selectable-row:not(.p-highlight):not(
      .p-datatable-emptymessage
    ):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-datatable.p-datatable-selectable
    .p-datatable-tbody
    > tr.p-selectable-row:focus {
    outline: 0.15rem solid #bbc7ee;
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-selectable-cell
    .p-datatable-tbody
    > tr.p-selectable-row
    > td.p-selectable-cell:not(.p-highlight):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-datatable.p-datatable-selectable-cell
    .p-datatable-tbody
    > tr.p-selectable-row
    > td.p-selectable-cell:focus {
    outline: 0.15rem solid #bbc7ee;
    outline-offset: -0.15rem;
  }
  .p-datatable.p-datatable-hoverable-rows
    .p-datatable-tbody
    > tr:not(.p-highlight):not(.p-datatable-emptymessage):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-datatable .p-column-resizer-helper {
    background: #5472d4;
  }
  .p-datatable .p-datatable-scrollable-header,
  .p-datatable .p-datatable-scrollable-footer {
    background: #ffffff;
  }
  .p-datatable.p-datatable-scrollable
    > .p-datatable-wrapper
    > .p-datatable-table
    > .p-datatable-thead,
  .p-datatable.p-datatable-scrollable
    > .p-datatable-wrapper
    > .p-datatable-table
    > .p-datatable-tfoot,
  .p-datatable.p-datatable-scrollable
    > .p-datatable-wrapper
    > .p-virtualscroller
    > .p-datatable-table
    > .p-datatable-thead,
  .p-datatable.p-datatable-scrollable
    > .p-datatable-wrapper
    > .p-virtualscroller
    > .p-datatable-table
    > .p-datatable-tfoot {
    background-color: #ffffff;
  }
  .p-datatable .p-datatable-loading-icon {
    font-size: 2rem;
  }
  .p-datatable .p-datatable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-top {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-paginator-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td {
    border-width: 1px 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {
    border-width: 1px 1px 0 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines
    .p-datatable-tbody
    > tr:last-child
    > td:last-child {
    border-width: 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td {
    border-width: 1px 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {
    border-width: 1px 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines
    .p-datatable-thead
    + .p-datatable-tfoot
    > tr
    > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines
    .p-datatable-thead
    + .p-datatable-tfoot
    > tr
    > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(
      .p-datatable-tbody
    )
    .p-datatable-tbody
    > tr
    > td {
    border-width: 0 0 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(
      .p-datatable-tbody
    )
    .p-datatable-tbody
    > tr
    > td:last-child {
    border-width: 0 1px 1px 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(
      .p-datatable-tfoot
    )
    .p-datatable-tbody
    > tr:last-child
    > td {
    border-width: 0 0 0 1px;
  }
  .p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(
      .p-datatable-tfoot
    )
    .p-datatable-tbody
    > tr:last-child
    > td:last-child {
    border-width: 0 1px 0 1px;
  }
  .p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {
    background: #fcfcfc;
  }
  .p-datatable.p-datatable-striped
    .p-datatable-tbody
    > tr.p-row-odd.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-datatable.p-datatable-striped
    .p-datatable-tbody
    > tr.p-row-odd.p-highlight
    .p-row-toggler {
    color: #585858;
  }
  .p-datatable.p-datatable-striped
    .p-datatable-tbody
    > tr.p-row-odd.p-highlight
    .p-row-toggler:hover {
    color: #585858;
  }
  .p-datatable.p-datatable-striped
    .p-datatable-tbody
    > tr.p-row-odd
    + .p-row-expanded {
    background: #fcfcfc;
  }
  .p-datatable.p-datatable-sm .p-datatable-header {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-sm .p-datatable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-datatable.p-datatable-lg .p-datatable-footer {
    padding: 1.25rem 1.25rem;
  }

  .p-datatable-drag-selection-helper {
    background: rgba(84, 114, 212, 0.16);
  }

  .p-dataview .p-paginator-top {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-dataview .p-paginator-bottom {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-dataview .p-dataview-header {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-dataview .p-dataview-content {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    padding: 0;
  }
  .p-dataview.p-dataview-list .p-dataview-content > .p-grid > div {
    border: solid #f5f5f5;
    border-width: 0 0 1px 0;
  }
  .p-dataview .p-dataview-footer {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-dataview .p-dataview-loading-icon {
    font-size: 2rem;
  }
  .p-dataview .p-dataview-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }

  .p-datascroller .p-paginator-top {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-datascroller .p-paginator-bottom {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-datascroller .p-datascroller-header {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-datascroller .p-datascroller-content {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    padding: 0;
  }
  .p-datascroller.p-datascroller-inline .p-datascroller-list > li {
    border: solid #f5f5f5;
    border-width: 0 0 1px 0;
  }
  .p-datascroller .p-datascroller-footer {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .p-column-filter-row .p-column-filter-menu-button,
  .p-column-filter-row .p-column-filter-clear-button {
    margin-left: 0.5rem;
  }

  .p-column-filter-menu-button {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-column-filter-menu-button:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-open,
  .p-column-filter-menu-button.p-column-filter-menu-button-open:hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-column-filter-menu-button.p-column-filter-menu-button-active,
  .p-column-filter-menu-button.p-column-filter-menu-button-active:hover {
    background: #ced6f1;
    color: #585858;
  }
  .p-column-filter-menu-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-column-filter-clear-button {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-column-filter-clear-button:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-column-filter-clear-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-column-filter-overlay {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    min-width: 12.5rem;
  }
  .p-column-filter-overlay .p-column-filter-row-items {
    padding: 0.5rem 0.5rem;
  }
  .p-column-filter-overlay
    .p-column-filter-row-items
    .p-column-filter-row-item {
    margin: 0 0 4px 0;
    padding: 0.5rem 1rem;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-column-filter-overlay
    .p-column-filter-row-items
    .p-column-filter-row-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-column-filter-overlay
    .p-column-filter-row-items
    .p-column-filter-row-item:not(.p-highlight):not(.p-disabled):hover {
    color: #6c6c6c;
    background: #edf0fa;
  }
  .p-column-filter-overlay
    .p-column-filter-row-items
    .p-column-filter-row-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-column-filter-overlay
    .p-column-filter-row-items
    .p-column-filter-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }

  .p-column-filter-overlay-menu .p-column-filter-operator {
    padding: 0.5rem 1.5rem;
    border-bottom: 0 none;
    color: #6c6c6c;
    background: #ffffff;
    margin: 0;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint {
    padding: 1rem;
    border-bottom: 1px solid #ebebeb;
  }
  .p-column-filter-overlay-menu
    .p-column-filter-constraint
    .p-column-filter-matchmode-dropdown {
    margin-bottom: 0.5rem;
  }
  .p-column-filter-overlay-menu
    .p-column-filter-constraint
    .p-column-filter-remove-button {
    margin-top: 0.5rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-constraint:last-child {
    border-bottom: 0 none;
  }
  .p-column-filter-overlay-menu .p-column-filter-add-rule {
    padding: 0.5rem 1rem;
  }
  .p-column-filter-overlay-menu .p-column-filter-buttonbar {
    padding: 1rem;
  }

  .fc {
    /* FullCalendar 4 */
    /* FullCalendar 5 */
  }
  .fc.fc-unthemed .fc-view-container th {
    background: #ffffff;
    border: 2px solid #ebebeb;
    color: #6c6c6c;
  }
  .fc.fc-unthemed .fc-view-container td.fc-widget-content {
    border: 2px solid #ebebeb;
    color: #6c6c6c;
  }
  .fc.fc-unthemed .fc-view-container td.fc-head-container {
    border: 2px solid #ebebeb;
  }
  .fc.fc-unthemed .fc-view-container .fc-view {
    background: #ffffff;
  }
  .fc.fc-unthemed .fc-view-container .fc-row {
    border-right: 2px solid #ebebeb;
  }
  .fc.fc-unthemed .fc-view-container .fc-event {
    background: #4868d1;
    border: 2px solid #4868d1;
    color: #ffffff;
  }
  .fc.fc-unthemed .fc-view-container .fc-divider {
    background: #ffffff;
    border: 2px solid #ebebeb;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button {
    color: #ffffff;
    background: #5472d4;
    border: 2px solid #5472d4;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
    display: flex;
    align-items: center;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button:enabled:hover {
    background: #4868d1;
    color: #ffffff;
    border-color: #4868d1;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active {
    background: #3c5ece;
    color: #ffffff;
    border-color: #3c5ece;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button:enabled:active:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left {
    font-family: 'PrimeIcons' !important;
    text-indent: 0;
    font-size: 1rem;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-left:before {
    content: '\e900';
  }
  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right {
    font-family: 'PrimeIcons' !important;
    text-indent: 0;
    font-size: 1rem;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button .fc-icon-chevron-right:before {
    content: '\e901';
  }
  .fc.fc-unthemed .fc-toolbar .fc-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button,
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button,
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    color: #6c6c6c;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:hover,
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:hover,
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:hover {
    background: #edf0fa;
    border-color: #e1e1e1;
    color: #6c6c6c;
  }
  .fc.fc-unthemed
    .fc-toolbar
    .fc-button.fc-dayGridMonth-button.fc-button-active,
  .fc.fc-unthemed
    .fc-toolbar
    .fc-button.fc-timeGridWeek-button.fc-button-active,
  .fc.fc-unthemed
    .fc-toolbar
    .fc-button.fc-timeGridDay-button.fc-button-active {
    background: #ced6f1;
    border-color: #ced6f1;
    color: #585858;
  }
  .fc.fc-unthemed
    .fc-toolbar
    .fc-button.fc-dayGridMonth-button.fc-button-active:hover,
  .fc.fc-unthemed
    .fc-toolbar
    .fc-button.fc-timeGridWeek-button.fc-button-active:hover,
  .fc.fc-unthemed
    .fc-toolbar
    .fc-button.fc-timeGridDay-button.fc-button-active:hover {
    background: #bdc7ec;
    border-color: #bdc7ec;
    color: #585858;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-dayGridMonth-button:focus,
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridWeek-button:focus,
  .fc.fc-unthemed .fc-toolbar .fc-button.fc-timeGridDay-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    z-index: 1;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button {
    border-radius: 0;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .fc.fc-unthemed .fc-toolbar .fc-button-group .fc-button:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-scrollgrid {
    border-color: #ebebeb;
  }
  .fc.fc-theme-standard .fc-view-harness th {
    background: #ffffff;
    border-color: #ebebeb;
    color: #6c6c6c;
  }
  .fc.fc-theme-standard .fc-view-harness td {
    color: #6c6c6c;
    border-color: #ebebeb;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-view {
    background: #ffffff;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-popover {
    background: none;
    border: 0 none;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-header {
    border: 2px solid #ebebeb;
    padding: 1rem;
    background: #ffffff;
    color: #6c6c6c;
  }
  .fc.fc-theme-standard
    .fc-view-harness
    .fc-popover
    .fc-popover-header
    .fc-popover-close {
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: 'PrimeIcons' !important;
    font-size: 1rem;
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .fc.fc-theme-standard
    .fc-view-harness
    .fc-popover
    .fc-popover-header
    .fc-popover-close:before {
    content: '\e90b';
  }
  .fc.fc-theme-standard
    .fc-view-harness
    .fc-popover
    .fc-popover-header
    .fc-popover-close:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .fc.fc-theme-standard
    .fc-view-harness
    .fc-popover
    .fc-popover-header
    .fc-popover-close:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-popover .fc-popover-body {
    padding: 1rem;
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    border-top: 0 none;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-block-event {
    color: #ffffff;
    background: #4868d1;
    border-color: #4868d1;
  }
  .fc.fc-theme-standard
    .fc-view-harness
    .fc-event.fc-daygrid-block-event
    .fc-event-main {
    color: #ffffff;
  }
  .fc.fc-theme-standard
    .fc-view-harness
    .fc-event.fc-daygrid-dot-event
    .fc-daygrid-event-dot {
    background: #4868d1;
    border-color: #4868d1;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-event.fc-daygrid-dot-event:hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .fc.fc-theme-standard .fc-view-harness .fc-cell-shaded {
    background: #ffffff;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button {
    color: #ffffff;
    background: #5472d4;
    border: 2px solid #5472d4;
    font-size: 1rem;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
    border-radius: 6px;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:hover {
    background: #4868d1;
    color: #ffffff;
    border-color: #4868d1;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active {
    background: #3c5ece;
    color: #ffffff;
    border-color: #3c5ece;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button:enabled:active:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button:disabled {
    opacity: 0.6;
    color: #ffffff;
    background: #5472d4;
    border: 2px solid #5472d4;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left {
    font-family: 'PrimeIcons' !important;
    text-indent: 0;
    font-size: 1rem;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-left:before {
    content: '\e900';
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right {
    font-family: 'PrimeIcons' !important;
    text-indent: 0;
    font-size: 1rem;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button .fc-icon-chevron-right:before {
    content: '\e901';
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button,
  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button,
  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button {
    background: #ffffff;
    border: 2px solid #e1e1e1;
    color: #6c6c6c;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-dayGridMonth-button:hover,
  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridWeek-button:hover,
  .fc.fc-theme-standard .fc-toolbar .fc-button.fc-timeGridDay-button:hover {
    background: #edf0fa;
    border-color: #e1e1e1;
    color: #6c6c6c;
  }
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-dayGridMonth-button.fc-button-active,
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-timeGridWeek-button.fc-button-active,
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-timeGridDay-button.fc-button-active {
    background: #ced6f1;
    border-color: #ced6f1;
    color: #585858;
  }
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-dayGridMonth-button.fc-button-active:hover,
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-timeGridWeek-button.fc-button-active:hover,
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-timeGridDay-button.fc-button-active:hover {
    background: #bdc7ec;
    border-color: #bdc7ec;
    color: #585858;
  }
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-dayGridMonth-button:not(:disabled):focus,
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-timeGridWeek-button:not(:disabled):focus,
  .fc.fc-theme-standard
    .fc-toolbar
    .fc-button.fc-timeGridDay-button:not(:disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
    z-index: 1;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button {
    border-radius: 0;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:first-child {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .fc.fc-theme-standard .fc-toolbar .fc-button-group .fc-button:last-child {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .fc.fc-theme-standard .fc-highlight {
    color: #585858;
    background: #ced6f1;
  }

  .p-orderlist .p-orderlist-controls {
    padding: 1rem;
  }
  .p-orderlist .p-orderlist-controls .p-button {
    margin-bottom: 0.5rem;
  }
  .p-orderlist .p-orderlist-header {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    padding: 1rem;
    font-weight: 600;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-orderlist .p-orderlist-filter-container {
    padding: 1rem;
    background: #ffffff;
    border: 2px solid #ebebeb;
    border-bottom: 0 none;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-input {
    padding-right: 1.75rem;
  }
  .p-orderlist .p-orderlist-filter-container .p-orderlist-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-orderlist .p-orderlist-list {
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    padding: 0.5rem 0.5rem;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item {
    padding: 0.5rem 1rem;
    margin: 0 0 4px 0;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:not(.p-highlight):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-orderlist .p-orderlist-list .p-orderlist-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }
  .p-orderlist.p-orderlist-striped
    .p-orderlist-list
    .p-orderlist-item:nth-child(even) {
    background: #fcfcfc;
  }
  .p-orderlist.p-orderlist-striped
    .p-orderlist-list
    .p-orderlist-item:nth-child(even):hover {
    background: #edf0fa;
  }

  .p-organizationchart
    .p-organizationchart-node-content.p-organizationchart-selectable-node:not(
      .p-highlight
    ):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-organizationchart .p-organizationchart-node-content.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-organizationchart
    .p-organizationchart-node-content.p-highlight
    .p-node-toggler
    i {
    color: #6b83d5;
  }
  .p-organizationchart .p-organizationchart-line-down {
    background: #ebebeb;
  }
  .p-organizationchart .p-organizationchart-line-left {
    border-right: 2px solid #ebebeb;
    border-color: #ebebeb;
  }
  .p-organizationchart .p-organizationchart-line-top {
    border-top: 2px solid #ebebeb;
    border-color: #ebebeb;
  }
  .p-organizationchart .p-organizationchart-node-content {
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    padding: 1rem;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler {
    background: inherit;
    color: inherit;
    border-radius: 50%;
  }
  .p-organizationchart .p-organizationchart-node-content .p-node-toggler:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-paginator {
    background: #ffffff;
    color: #898989;
    border: solid #ebebeb;
    border-width: 2px;
    padding: 0.5rem 1rem;
    border-radius: 6px;
  }
  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-last {
    background-color: transparent;
    border: 0 none;
    color: #898989;
    min-width: 2.857rem;
    height: 2.857rem;
    margin: 0.143rem;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-paginator .p-paginator-first:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-prev:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-next:not(.p-disabled):not(.p-highlight):hover,
  .p-paginator .p-paginator-last:not(.p-disabled):not(.p-highlight):hover {
    background: #edf0fa;
    border-color: transparent;
    color: #6c6c6c;
  }
  .p-paginator .p-paginator-first {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-paginator .p-paginator-last {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  .p-paginator .p-dropdown {
    margin-left: 0.5rem;
    height: 2.857rem;
  }
  .p-paginator .p-dropdown .p-dropdown-label {
    padding-right: 0;
  }
  .p-paginator .p-paginator-page-input {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
  .p-paginator .p-paginator-page-input .p-inputtext {
    max-width: 2.857rem;
  }
  .p-paginator .p-paginator-current {
    background-color: transparent;
    border: 0 none;
    color: #898989;
    min-width: 2.857rem;
    height: 2.857rem;
    margin: 0.143rem;
    padding: 0 0.5rem;
  }
  .p-paginator .p-paginator-pages .p-paginator-page {
    background-color: transparent;
    border: 0 none;
    color: #898989;
    min-width: 2.857rem;
    height: 2.857rem;
    margin: 0.143rem;
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
    background: #ced6f1;
    border-color: #ced6f1;
    color: #585858;
  }
  .p-paginator .p-paginator-pages .p-paginator-page:not(.p-highlight):hover {
    background: #edf0fa;
    border-color: transparent;
    color: #6c6c6c;
  }

  .p-picklist .p-picklist-buttons {
    padding: 1rem;
  }
  .p-picklist .p-picklist-buttons .p-button {
    margin-bottom: 0.5rem;
  }
  .p-picklist .p-picklist-header {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    padding: 1rem;
    font-weight: 600;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-picklist .p-picklist-filter-container {
    padding: 1rem;
    background: #ffffff;
    border: 2px solid #ebebeb;
    border-bottom: 0 none;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-input {
    padding-right: 1.75rem;
  }
  .p-picklist .p-picklist-filter-container .p-picklist-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-picklist .p-picklist-list {
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    padding: 0.5rem 0.5rem;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-picklist .p-picklist-list .p-picklist-item {
    padding: 0.5rem 1rem;
    margin: 0 0 4px 0;
    border: 0 none;
    color: #6c6c6c;
    background: transparent;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .p-picklist .p-picklist-list .p-picklist-item:not(.p-highlight):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-picklist .p-picklist-list .p-picklist-item:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-picklist .p-picklist-list .p-picklist-item.p-highlight {
    color: #585858;
    background: #ced6f1;
  }

  .p-tree {
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    padding: 1rem;
    border-radius: 6px;
  }
  .p-tree .p-tree-container .p-treenode {
    padding: 0.143rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content {
    border-radius: 6px;
    transition: box-shadow 0.3s;
    padding: 0.5rem;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-tree-toggler {
    margin-right: 0.5rem;
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content
    .p-tree-toggler:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content
    .p-tree-toggler:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-treenode-icon {
    margin-right: 0.5rem;
    color: #898989;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content
    .p-checkbox
    .p-indeterminate
    .p-checkbox-icon {
    color: #6c6c6c;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-tree .p-tree-container .p-treenode .p-treenode-content.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content.p-highlight
    .p-tree-toggler,
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content.p-highlight
    .p-treenode-icon {
    color: #585858;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content.p-highlight
    .p-tree-toggler:hover,
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content.p-highlight
    .p-treenode-icon:hover {
    color: #585858;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content.p-treenode-selectable:not(.p-highlight):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-tree
    .p-tree-container
    .p-treenode
    .p-treenode-content.p-treenode-dragover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-tree .p-tree-filter-container {
    margin-bottom: 0.5rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter {
    width: 100%;
    padding-right: 1.75rem;
  }
  .p-tree .p-tree-filter-container .p-tree-filter-icon {
    right: 0.75rem;
    color: #898989;
  }
  .p-tree .p-treenode-children {
    padding: 0 0 0 1rem;
  }
  .p-tree .p-tree-loading-icon {
    font-size: 2rem;
  }
  .p-tree .p-tree-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-tree .p-treenode-droppoint {
    height: 0.5rem;
  }
  .p-tree .p-treenode-droppoint.p-treenode-droppoint-active {
    background: #889cdd;
  }

  .p-treetable .p-paginator-top {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-treetable .p-paginator-bottom {
    border-width: 0 0 2px 0;
    border-radius: 0;
  }
  .p-treetable .p-treetable-header {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-treetable .p-treetable-footer {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
    font-weight: 600;
  }
  .p-treetable .p-treetable-thead > tr > th {
    text-align: left;
    padding: 1rem 1rem;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    font-weight: 600;
    color: #6c6c6c;
    background: #ffffff;
    transition: box-shadow 0.3s;
  }
  .p-treetable .p-treetable-tfoot > tr > td {
    text-align: left;
    padding: 1rem 1rem;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    font-weight: 600;
    color: #6c6c6c;
    background: #ffffff;
  }
  .p-treetable .p-sortable-column {
    outline-color: #bbc7ee;
  }
  .p-treetable .p-sortable-column .p-sortable-column-icon {
    color: #898989;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column .p-sortable-column-badge {
    border-radius: 50%;
    height: 1.143rem;
    min-width: 1.143rem;
    line-height: 1.143rem;
    color: #585858;
    background: #ced6f1;
    margin-left: 0.5rem;
  }
  .p-treetable .p-sortable-column:not(.p-highlight):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-treetable
    .p-sortable-column:not(.p-highlight):hover
    .p-sortable-column-icon {
    color: #898989;
  }
  .p-treetable .p-sortable-column.p-highlight {
    background: #ffffff;
    color: #5472d4;
  }
  .p-treetable .p-sortable-column.p-highlight .p-sortable-column-icon {
    color: #5472d4;
  }
  .p-treetable .p-treetable-tbody > tr {
    background: #ffffff;
    color: #6c6c6c;
    transition: box-shadow 0.3s;
  }
  .p-treetable .p-treetable-tbody > tr > td {
    text-align: left;
    border: 2px solid #f5f5f5;
    border-width: 0 0 2px 0;
    padding: 1rem 1rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    margin-right: 0.5rem;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-treetable .p-treetable-tbody > tr > td .p-treetable-toggler + .p-checkbox {
    margin-right: 0.5rem;
  }
  .p-treetable
    .p-treetable-tbody
    > tr
    > td
    .p-treetable-toggler
    + .p-checkbox
    .p-indeterminate
    .p-checkbox-icon {
    color: #6c6c6c;
  }
  .p-treetable .p-treetable-tbody > tr:focus {
    outline: 0.15rem solid #bbc7ee;
    outline-offset: -0.15rem;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler {
    color: #585858;
  }
  .p-treetable .p-treetable-tbody > tr.p-highlight .p-treetable-toggler:hover {
    color: #585858;
  }
  .p-treetable.p-treetable-selectable
    .p-treetable-tbody
    > tr:not(.p-highlight):hover,
  .p-treetable.p-treetable-hoverable-rows
    .p-treetable-tbody
    > tr:not(.p-highlight):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-treetable.p-treetable-selectable
    .p-treetable-tbody
    > tr:not(.p-highlight):hover
    .p-treetable-toggler,
  .p-treetable.p-treetable-hoverable-rows
    .p-treetable-tbody
    > tr:not(.p-highlight):hover
    .p-treetable-toggler {
    color: #6c6c6c;
  }
  .p-treetable .p-column-resizer-helper {
    background: #5472d4;
  }
  .p-treetable .p-treetable-scrollable-header,
  .p-treetable .p-treetable-scrollable-footer {
    background: #ffffff;
  }
  .p-treetable .p-treetable-loading-icon {
    font-size: 2rem;
  }
  .p-treetable .p-treetable-loading-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-header {
    border-width: 1px 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-footer {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-top {
    border-width: 0 1px 0 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-bottom {
    border-width: 0 1px 1px 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-thead > tr > th {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tbody > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-gridlines .p-treetable-tfoot > tr > td {
    border-width: 1px;
  }
  .p-treetable.p-treetable-striped .p-treetable-tbody > tr.p-row-odd {
    background: #fcfcfc;
  }
  .p-treetable.p-treetable-striped
    .p-treetable-tbody
    > tr.p-row-odd.p-highlight {
    background: #ced6f1;
    color: #585858;
  }
  .p-treetable.p-treetable-striped
    .p-treetable-tbody
    > tr.p-row-odd.p-highlight
    .p-row-toggler {
    color: #585858;
  }
  .p-treetable.p-treetable-striped
    .p-treetable-tbody
    > tr.p-row-odd.p-highlight
    .p-row-toggler:hover {
    color: #585858;
  }
  .p-treetable.p-treetable-striped
    .p-treetable-tbody
    > tr.p-row-odd
    + .p-row-expanded {
    background: #fcfcfc;
  }
  .p-treetable.p-treetable-sm .p-treetable-header {
    padding: 0.875rem 0.875rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-sm .p-treetable-footer {
    padding: 0.5rem 0.5rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-header {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
    padding: 1.25rem 1.25rem;
  }
  .p-treetable.p-treetable-lg .p-treetable-footer {
    padding: 1.25rem 1.25rem;
  }

  .p-timeline .p-timeline-event-marker {
    border: 2px solid #5472d4;
    border-radius: 50%;
    width: 1rem;
    height: 1rem;
    background-color: #ffffff;
  }
  .p-timeline .p-timeline-event-connector {
    background-color: #ebebeb;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-opposite,
  .p-timeline.p-timeline-vertical .p-timeline-event-content {
    padding: 0 1rem;
  }
  .p-timeline.p-timeline-vertical .p-timeline-event-connector {
    width: 2px;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-opposite,
  .p-timeline.p-timeline-horizontal .p-timeline-event-content {
    padding: 1rem 0;
  }
  .p-timeline.p-timeline-horizontal .p-timeline-event-connector {
    height: 2px;
  }

  .p-accordion .p-accordion-header .p-accordion-header-link {
    padding: 1rem;
    border: 2px solid #ebebeb;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
    border-radius: 6px;
    transition: box-shadow 0.3s;
  }
  .p-accordion
    .p-accordion-header
    .p-accordion-header-link
    .p-accordion-toggle-icon {
    margin-right: 0.5rem;
  }
  .p-accordion
    .p-accordion-header:not(.p-disabled)
    .p-accordion-header-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-accordion
    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
    .p-accordion-header-link {
    background: #edf0fa;
    border-color: #ebebeb;
    color: #6c6c6c;
  }
  .p-accordion
    .p-accordion-header:not(.p-disabled).p-highlight
    .p-accordion-header-link {
    background: #ffffff;
    border-color: #ebebeb;
    color: #6c6c6c;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion
    .p-accordion-header:not(.p-disabled).p-highlight:hover
    .p-accordion-header-link {
    border-color: #ebebeb;
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-accordion .p-accordion-content {
    padding: 1rem;
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-accordion .p-accordion-tab {
    margin-bottom: 0;
  }
  .p-accordion .p-accordion-tab .p-accordion-header .p-accordion-header-link {
    border-radius: 0;
  }
  .p-accordion .p-accordion-tab .p-accordion-content {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-accordion
    .p-accordion-tab:not(:first-child)
    .p-accordion-header
    .p-accordion-header-link {
    border-top: 0 none;
  }
  .p-accordion
    .p-accordion-tab:not(:first-child)
    .p-accordion-header:not(.p-highlight):not(.p-disabled):hover
    .p-accordion-header-link,
  .p-accordion
    .p-accordion-tab:not(:first-child)
    .p-accordion-header:not(.p-disabled).p-highlight:hover
    .p-accordion-header-link {
    border-top: 0 none;
  }
  .p-accordion
    .p-accordion-tab:first-child
    .p-accordion-header
    .p-accordion-header-link {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-accordion
    .p-accordion-tab:last-child
    .p-accordion-header:not(.p-highlight)
    .p-accordion-header-link {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-accordion
    .p-accordion-tab:last-child
    .p-accordion-header:not(.p-highlight)
    .p-accordion-content {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .p-card {
    background: #ffffff;
    color: #6c6c6c;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
  }
  .p-card .p-card-body {
    padding: 1rem;
  }
  .p-card .p-card-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  .p-card .p-card-subtitle {
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #898989;
  }
  .p-card .p-card-content {
    padding: 1rem 0;
  }
  .p-card .p-card-footer {
    padding: 1rem 0 0 0;
  }

  .p-fieldset {
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    border-radius: 6px;
  }
  .p-fieldset .p-fieldset-legend {
    padding: 1rem;
    border: 2px solid #ebebeb;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
    border-radius: 6px;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
    padding: 0;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
    padding: 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a .p-fieldset-toggler {
    margin-right: 0.5rem;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend a:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-fieldset.p-fieldset-toggleable .p-fieldset-legend:hover {
    background: #edf0fa;
    border-color: #ebebeb;
    color: #6c6c6c;
  }
  .p-fieldset .p-fieldset-content {
    padding: 1rem;
  }

  .p-divider .p-divider-content {
    background-color: #ffffff;
  }
  .p-divider.p-divider-horizontal {
    margin: 1rem 0;
    padding: 0 1rem;
  }
  .p-divider.p-divider-horizontal:before {
    border-top: 1px #ebebeb;
  }
  .p-divider.p-divider-horizontal .p-divider-content {
    padding: 0 0.5rem;
  }
  .p-divider.p-divider-vertical {
    margin: 0 1rem;
    padding: 1rem 0;
  }
  .p-divider.p-divider-vertical:before {
    border-left: 1px #ebebeb;
  }
  .p-divider.p-divider-vertical .p-divider-content {
    padding: 0.5rem 0;
  }

  .p-panel .p-panel-header {
    border: 2px solid #ebebeb;
    padding: 1rem;
    background: #ffffff;
    color: #6c6c6c;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-panel .p-panel-header .p-panel-title {
    font-weight: 600;
  }
  .p-panel .p-panel-header .p-panel-header-icon {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-panel .p-panel-header .p-panel-header-icon:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-panel .p-panel-header .p-panel-header-icon:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-panel.p-panel-toggleable .p-panel-header {
    padding: 0.5rem 1rem;
  }
  .p-panel .p-panel-content {
    padding: 1rem;
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    border-top: 0 none;
  }
  .p-panel .p-panel-footer {
    padding: 0.5rem 1rem;
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    border-top: 0 none;
  }

  .p-splitter {
    border: 2px solid #ebebeb;
    background: #ffffff;
    border-radius: 6px;
    color: #6c6c6c;
  }
  .p-splitter .p-splitter-gutter {
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    background: #f5f5f5;
  }
  .p-splitter .p-splitter-gutter .p-splitter-gutter-handle {
    background: #ebebeb;
  }
  .p-splitter .p-splitter-gutter-resizing {
    background: #ebebeb;
  }

  .p-scrollpanel .p-scrollpanel-bar {
    background: #f5f5f5;
    border: 0 none;
  }

  .p-tabview .p-tabview-nav {
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-width: 0 0 2px 0;
  }
  .p-tabview .p-tabview-nav li {
    margin-right: 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link {
    border: solid #ebebeb;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #ebebeb transparent;
    background: #ffffff;
    color: #898989;
    padding: 1rem;
    font-weight: 600;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.3s;
    margin: 0 0 -2px 0;
  }
  .p-tabview .p-tabview-nav li .p-tabview-nav-link:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.1rem #bbc7ee;
  }
  .p-tabview
    .p-tabview-nav
    li:not(.p-highlight):not(.p-disabled):hover
    .p-tabview-nav-link {
    background: #ffffff;
    border-color: #ced6f1;
    color: #898989;
  }
  .p-tabview .p-tabview-nav li.p-highlight .p-tabview-nav-link {
    background: #ffffff;
    border-color: #5472d4;
    color: #5472d4;
  }
  .p-tabview .p-tabview-close {
    margin-left: 0.5rem;
  }
  .p-tabview .p-tabview-nav-btn.p-link {
    background: #ffffff;
    color: #5472d4;
    width: 2.857rem;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
      0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    border-radius: 0;
  }
  .p-tabview .p-tabview-nav-btn.p-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.1rem #bbc7ee;
  }
  .p-tabview .p-tabview-panels {
    background: #ffffff;
    padding: 1rem;
    border: 0 none;
    color: #6c6c6c;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .p-toolbar {
    background: #ffffff;
    border: 2px solid #ebebeb;
    padding: 1rem;
    border-radius: 6px;
    gap: 0.5rem;
  }
  .p-toolbar .p-toolbar-separator {
    margin: 0 0.5rem;
  }

  .p-confirm-popup {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
  .p-confirm-popup .p-confirm-popup-content {
    padding: 1rem;
  }
  .p-confirm-popup .p-confirm-popup-footer {
    text-align: right;
    padding: 0 1rem 1rem 1rem;
  }
  .p-confirm-popup .p-confirm-popup-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-confirm-popup .p-confirm-popup-footer button:last-child {
    margin: 0;
  }
  .p-confirm-popup:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-confirm-popup:before {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-confirm-popup.p-confirm-popup-flipped:after {
    border-top-color: #ffffff;
  }
  .p-confirm-popup.p-confirm-popup-flipped:before {
    border-top-color: #ffffff;
  }
  .p-confirm-popup .p-confirm-popup-icon {
    font-size: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-confirm-popup .p-confirm-popup-message {
    margin-left: 1rem;
  }

  .p-dialog {
    border-radius: 6px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
    border: 0 none;
  }
  .p-dialog .p-dialog-header {
    border-bottom: 0 none;
    background: #ffffff;
    color: #6c6c6c;
    padding: 1.5rem;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-dialog .p-dialog-header .p-dialog-title {
    font-weight: 600;
    font-size: 1.25rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    margin-right: 0.5rem;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-dialog .p-dialog-header .p-dialog-header-icon:last-child {
    margin-right: 0;
  }
  .p-dialog .p-dialog-content {
    background: #ffffff;
    color: #6c6c6c;
    padding: 0 1.5rem 2rem 1.5rem;
  }
  .p-dialog .p-dialog-content:last-of-type {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-dialog .p-dialog-footer {
    border-top: 0 none;
    background: #ffffff;
    color: #6c6c6c;
    padding: 0 1.5rem 1.5rem 1.5rem;
    text-align: right;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-dialog .p-dialog-footer button {
    margin: 0 0.5rem 0 0;
    width: auto;
  }
  .p-dialog.p-dialog-maximized .p-dialog-header,
  .p-dialog.p-dialog-maximized .p-dialog-content:last-of-type {
    border-radius: 0;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon {
    font-size: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-dialog.p-confirm-dialog .p-confirm-dialog-message {
    margin-left: 1rem;
  }

  .p-overlaypanel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    border-radius: 6px;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
  .p-overlaypanel .p-overlaypanel-content {
    padding: 1rem;
  }
  .p-overlaypanel .p-overlaypanel-close {
    background: #5472d4;
    color: #ffffff;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    border-radius: 50%;
    position: absolute;
    top: -1rem;
    right: -1rem;
  }
  .p-overlaypanel .p-overlaypanel-close:enabled:hover {
    background: #4868d1;
    color: #ffffff;
  }
  .p-overlaypanel:after {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #ffffff;
  }
  .p-overlaypanel:before {
    border: solid transparent;
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: #f2f2f2;
  }
  .p-overlaypanel.p-overlaypanel-flipped:after {
    border-top-color: #ffffff;
  }
  .p-overlaypanel.p-overlaypanel-flipped:before {
    border-top-color: #ffffff;
  }

  .p-sidebar {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2),
      0px 24px 38px 3px rgba(0, 0, 0, 0.14),
      0px 9px 46px 8px rgba(0, 0, 0, 0.12);
  }
  .p-sidebar .p-sidebar-header {
    padding: 1rem;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close,
  .p-sidebar .p-sidebar-header .p-sidebar-icon {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border: 0 none;
    background: transparent;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:enabled:hover,
  .p-sidebar .p-sidebar-header .p-sidebar-icon:enabled:hover {
    color: #6c6c6c;
    border-color: transparent;
    background: #edf0fa;
  }
  .p-sidebar .p-sidebar-header .p-sidebar-close:focus,
  .p-sidebar .p-sidebar-header .p-sidebar-icon:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-sidebar .p-sidebar-header + .p-sidebar-content {
    padding-top: 0;
  }
  .p-sidebar .p-sidebar-content {
    padding: 1rem;
  }

  .p-tooltip .p-tooltip-text {
    background: #585858;
    color: #ffffff;
    padding: 0.5rem 0.75rem;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
  }
  .p-tooltip.p-tooltip-right .p-tooltip-arrow {
    border-right-color: #585858;
  }
  .p-tooltip.p-tooltip-left .p-tooltip-arrow {
    border-left-color: #585858;
  }
  .p-tooltip.p-tooltip-top .p-tooltip-arrow {
    border-top-color: #585858;
  }
  .p-tooltip.p-tooltip-bottom .p-tooltip-arrow {
    border-bottom-color: #585858;
  }

  .p-fileupload .p-fileupload-buttonbar {
    background: #ffffff;
    padding: 1rem;
    border: 2px solid #ebebeb;
    color: #6c6c6c;
    border-bottom: 0 none;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    gap: 0.5rem;
  }
  .p-fileupload .p-fileupload-buttonbar .p-button {
    margin-right: 0.5rem;
  }
  .p-fileupload .p-fileupload-content {
    background: #ffffff;
    padding: 2rem 1rem;
    border: 2px solid #ebebeb;
    color: #6c6c6c;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-fileupload .p-progressbar {
    height: 0.25rem;
  }
  .p-fileupload .p-fileupload-row > div {
    padding: 1rem 1rem;
  }
  .p-fileupload.p-fileupload-advanced .p-message {
    margin-top: 0;
  }

  .p-breadcrumb {
    background: #ffffff;
    border: 2px solid #ebebeb;
    border-radius: 6px;
    padding: 1rem;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
    transition: box-shadow 0.3s;
    border-radius: 6px;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-breadcrumb .p-breadcrumb-list li .p-menuitem-link .p-menuitem-icon {
    color: #898989;
  }
  .p-breadcrumb .p-breadcrumb-list li.p-menuitem-separator {
    margin: 0 0.5rem 0 0.5rem;
    color: #6c6c6c;
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-breadcrumb .p-breadcrumb-list li:last-child .p-menuitem-icon {
    color: #898989;
  }

  .p-contextmenu {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-contextmenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-contextmenu .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-contextmenu .p-menuitem-link .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-contextmenu .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #898989;
  }
  .p-contextmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #898989;
  }
  .p-contextmenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-contextmenu .p-submenu-list {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
  }
  .p-contextmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #edf0fa;
  }
  .p-contextmenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-contextmenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-icon,
  .p-contextmenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-submenu-icon {
    color: #898989;
  }
  .p-contextmenu .p-menu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }
  .p-contextmenu .p-submenu-icon {
    font-size: 0.875rem;
    transition: transform 0.3s;
  }
  .p-contextmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-dock .p-dock-list {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
  }
  .p-dock .p-dock-item {
    padding: 0.5rem;
  }
  .p-dock .p-dock-action {
    width: 4rem;
    height: 4rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next,
  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next {
    margin: 0 0.9rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next {
    margin: 0 1.3rem;
  }
  .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current,
  .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current {
    margin: 0 1.5rem;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next,
  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next {
    margin: 0.9rem 0;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next {
    margin: 1.3rem 0;
  }
  .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current,
  .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
    margin: 1.5rem 0;
  }

  @media screen and (max-width: 960px) {
    .p-dock.p-dock-top .p-dock-container,
    .p-dock.p-dock-bottom .p-dock-container {
      overflow-x: auto;
      width: 100%;
    }
    .p-dock.p-dock-top .p-dock-container .p-dock-list,
    .p-dock.p-dock-bottom .p-dock-container .p-dock-list {
      margin: 0 auto;
    }
    .p-dock.p-dock-left .p-dock-container,
    .p-dock.p-dock-right .p-dock-container {
      overflow-y: auto;
      height: 100%;
    }
    .p-dock.p-dock-left .p-dock-container .p-dock-list,
    .p-dock.p-dock-right .p-dock-container .p-dock-list {
      margin: auto 0;
    }
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-prev,
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-second-next,
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-prev,
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-next,
    .p-dock.p-dock-magnification.p-dock-top .p-dock-item-current,
    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-prev,
    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-second-next,
    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-prev,
    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-next,
    .p-dock.p-dock-magnification.p-dock-bottom .p-dock-item-current,
    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-prev,
    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-second-next,
    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-prev,
    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-next,
    .p-dock.p-dock-magnification.p-dock-left .p-dock-item-current,
    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-prev,
    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-second-next,
    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-prev,
    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-next,
    .p-dock.p-dock-magnification.p-dock-right .p-dock-item-current {
      transform: none;
      margin: 0;
    }
  }
  .p-megamenu {
    padding: 0.5rem;
    background: #f5f5f5;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    border-radius: 6px;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-submenu-icon {
    color: #898989;
    margin-left: 0.5rem;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-icon {
    color: #898989;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu .p-megamenu-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link,
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-text,
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-icon,
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-icon {
    color: #898989;
  }
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-submenu-icon,
  .p-megamenu
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover
    .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-megamenu .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu .p-menuitem-link .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-megamenu .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #898989;
  }
  .p-megamenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-megamenu .p-megamenu-panel {
    background: #ffffff;
    color: #6c6c6c;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-megamenu .p-megamenu-submenu-header {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-megamenu .p-megamenu-submenu {
    padding: 0.5rem 0.5rem;
    width: 12.5rem;
  }
  .p-megamenu .p-megamenu-submenu .p-menu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #edf0fa;
  }
  .p-megamenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
  .p-megamenu .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu.p-megamenu-vertical {
    width: 12.5rem;
    padding: 0.5rem 0.5rem;
  }
  .p-megamenu .p-megamenu-button {
    width: 2rem;
    height: 2rem;
    color: #898989;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-megamenu .p-megamenu-button:hover {
    color: #898989;
    background: #edf0fa;
  }
  .p-megamenu .p-megamenu-button:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-megamenu .p-submenu-icon {
    transition: transform 0.3s;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list > .p-menuitem {
    width: 100%;
    position: static;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-icon {
    color: #898989;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-submenu-icon {
    color: #898989;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem
    > .p-menuitem-link
    > .p-submenu-icon {
    margin-left: auto;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    > .p-submenu-icon {
    transform: rotate(-180deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-submenu-list {
    width: 100%;
    position: static;
    box-shadow: none;
    border: 0 none;
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    .p-submenu-list
    .p-submenu-icon {
    transition: transform 0.3s;
    transform: rotate(90deg);
  }
  .p-megamenu.p-megamenu-mobile-active
    .p-megamenu-root-list
    .p-submenu-list
    .p-menuitem-active
    > .p-menuitem-link
    > .p-submenu-icon {
    transform: rotate(-90deg);
  }
  .p-megamenu.p-megamenu-mobile-active .p-megamenu-root-list .p-menuitem {
    width: 100%;
    position: static;
  }

  .p-menu {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-menu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-menu .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menu .p-menuitem-link .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-menu .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #898989;
  }
  .p-menu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #898989;
  }
  .p-menu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-menu.p-menu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-menu .p-submenu-header {
    margin: 0;
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
  }
  .p-menu .p-menu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }

  .p-menubar {
    padding: 0.5rem;
    background: #f5f5f5;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    border-radius: 6px;
  }
  .p-menubar .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-menubar .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menubar .p-menuitem-link .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-menubar .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #898989;
  }
  .p-menubar .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #898989;
  }
  .p-menubar .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link
    .p-submenu-icon {
    color: #898989;
    margin-left: 0.5rem;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-icon {
    color: #898989;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem
    > .p-menuitem-link:not(.p-disabled):hover
    .p-submenu-icon {
    color: #898989;
  }
  .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link,
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-text,
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-icon,
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-icon {
    color: #898989;
  }
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-submenu-icon,
  .p-menubar
    .p-menubar-root-list
    > .p-menuitem.p-menuitem-active
    > .p-menuitem-link:not(.p-disabled):hover
    .p-submenu-icon {
    color: #898989;
  }
  .p-menubar .p-submenu-list {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    width: 12.5rem;
  }
  .p-menubar .p-submenu-list .p-menu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }
  .p-menubar .p-submenu-list .p-submenu-icon {
    font-size: 0.875rem;
  }
  .p-menubar .p-submenu-list .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #edf0fa;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-menuitem-icon,
  .p-menubar .p-menuitem.p-menuitem-active > .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }

  @media screen and (max-width: 960px) {
    .p-menubar {
      position: relative;
    }
    .p-menubar .p-menubar-button {
      display: flex;
      width: 2rem;
      height: 2rem;
      color: #898989;
      border-radius: 50%;
      transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    }
    .p-menubar .p-menubar-button:hover {
      color: #898989;
      background: #edf0fa;
    }
    .p-menubar .p-menubar-button:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.1rem #bbc7ee;
    }
    .p-menubar .p-menubar-root-list {
      position: absolute;
      display: none;
      padding: 0.5rem 0.5rem;
      background: #ffffff;
      border: 0 none;
      box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
        0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
      width: 100%;
    }
    .p-menubar .p-menubar-root-list .p-menu-separator {
      border-top: 1px solid #ebebeb;
      margin: 4px 0;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon {
      font-size: 0.875rem;
    }
    .p-menubar .p-menubar-root-list .p-submenu-icon.p-icon {
      width: 0.875rem;
      height: 0.875rem;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link {
      padding: 0.75rem 1rem;
      color: #6c6c6c;
      border-radius: 6px;
      transition: box-shadow 0.3s;
      user-select: none;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link
      .p-menuitem-text {
      color: #6c6c6c;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link
      .p-menuitem-icon {
      color: #898989;
      margin-right: 0.5rem;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link
      .p-submenu-icon {
      color: #898989;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link:not(.p-disabled):hover {
      background: #edf0fa;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link:not(.p-disabled):hover
      .p-menuitem-text {
      color: #6c6c6c;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link:not(.p-disabled):hover
      .p-menuitem-icon {
      color: #898989;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link:not(.p-disabled):hover
      .p-submenu-icon {
      color: #898989;
    }
    .p-menubar .p-menubar-root-list > .p-menuitem > .p-menuitem-link:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: inset 0 0 0 0.15rem #bbc7ee;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem
      > .p-menuitem-link
      > .p-submenu-icon {
      margin-left: auto;
      transition: transform 0.3s;
    }
    .p-menubar
      .p-menubar-root-list
      > .p-menuitem.p-menuitem-active
      > .p-menuitem-link
      > .p-submenu-icon {
      transform: rotate(-180deg);
    }
    .p-menubar .p-menubar-root-list .p-submenu-list {
      width: 100%;
      position: static;
      box-shadow: none;
      border: 0 none;
    }
    .p-menubar .p-menubar-root-list .p-submenu-list .p-submenu-icon {
      transition: transform 0.3s;
      transform: rotate(90deg);
    }
    .p-menubar
      .p-menubar-root-list
      .p-submenu-list
      .p-menuitem-active
      > .p-menuitem-link
      > .p-submenu-icon {
      transform: rotate(-90deg);
    }
    .p-menubar .p-menubar-root-list .p-menuitem {
      width: 100%;
      position: static;
    }
    .p-menubar .p-menubar-root-list ul li a {
      padding-left: 2.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li a {
      padding-left: 3.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li a {
      padding-left: 5.25rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li a {
      padding-left: 6.75rem;
    }
    .p-menubar .p-menubar-root-list ul li ul li ul li ul li ul li a {
      padding-left: 8.25rem;
    }
    .p-menubar.p-menubar-mobile-active .p-menubar-root-list {
      display: flex;
      flex-direction: column;
      top: 100%;
      left: 0;
      z-index: 1;
    }
  }
  .p-panelmenu .p-panelmenu-header > a {
    padding: 1rem;
    border: 2px solid #ebebeb;
    color: #6c6c6c;
    background: #ffffff;
    font-weight: 600;
    border-radius: 6px;
    transition: box-shadow 0.3s;
  }
  .p-panelmenu .p-panelmenu-header > a .p-panelmenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header > a .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu .p-panelmenu-header > a:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-panelmenu
    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
    > a:hover {
    background: #edf0fa;
    border-color: #ebebeb;
    color: #6c6c6c;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight {
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight > a {
    background: #ffffff;
    border-color: #ebebeb;
    color: #6c6c6c;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .p-panelmenu .p-panelmenu-header.p-highlight:not(.p-disabled) > a:hover {
    border-color: #ebebeb;
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-panelmenu .p-panelmenu-content {
    padding: 0.5rem 0.5rem;
    border: 2px solid #ebebeb;
    background: #ffffff;
    color: #6c6c6c;
    border-top: 0;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-submenu-icon {
    color: #898989;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover
    .p-menuitem-icon {
    color: #898989;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link:not(.p-disabled):hover
    .p-submenu-icon {
    color: #898989;
  }
  .p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-menuitem
    .p-menuitem-link
    .p-panelmenu-icon {
    margin-right: 0.5rem;
  }
  .p-panelmenu
    .p-panelmenu-content
    .p-submenu-list:not(.p-panelmenu-root-submenu) {
    padding: 0 0 0 1rem;
  }
  .p-panelmenu .p-panelmenu-panel {
    margin-bottom: 0;
  }
  .p-panelmenu .p-panelmenu-panel .p-panelmenu-header > a {
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-panel .p-panelmenu-content {
    border-radius: 0;
  }
  .p-panelmenu .p-panelmenu-panel:not(:first-child) .p-panelmenu-header > a {
    border-top: 0 none;
  }
  .p-panelmenu
    .p-panelmenu-panel:not(:first-child)
    .p-panelmenu-header:not(.p-highlight):not(.p-disabled):hover
    > a,
  .p-panelmenu
    .p-panelmenu-panel:not(:first-child)
    .p-panelmenu-header:not(.p-disabled).p-highlight:hover
    > a {
    border-top: 0 none;
  }
  .p-panelmenu .p-panelmenu-panel:first-child .p-panelmenu-header > a {
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
  .p-panelmenu
    .p-panelmenu-panel:last-child
    .p-panelmenu-header:not(.p-highlight)
    > a {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }
  .p-panelmenu .p-panelmenu-panel:last-child .p-panelmenu-content {
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  .p-slidemenu {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-slidemenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-slidemenu .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-slidemenu .p-menuitem-link .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-slidemenu .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #898989;
  }
  .p-slidemenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #898989;
  }
  .p-slidemenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-slidemenu.p-slidemenu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-slidemenu .p-slidemenu-list {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-slidemenu .p-slidemenu.p-slidemenu-active > .p-slidemenu-link {
    background: #edf0fa;
  }
  .p-slidemenu
    .p-slidemenu.p-slidemenu-active
    > .p-slidemenu-link
    .p-slidemenu-text {
    color: #6c6c6c;
  }
  .p-slidemenu
    .p-slidemenu.p-slidemenu-active
    > .p-slidemenu-link
    .p-slidemenu-icon,
  .p-slidemenu
    .p-slidemenu.p-slidemenu-active
    > .p-slidemenu-link
    .p-slidemenu-icon {
    color: #898989;
  }
  .p-slidemenu .p-slidemenu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }
  .p-slidemenu .p-slidemenu-icon {
    font-size: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }
  .p-slidemenu .p-slidemenu-backward {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
  }

  .p-steps .p-steps-item .p-menuitem-link {
    background: transparent;
    transition: box-shadow 0.3s;
    border-radius: 6px;
    background: #ffffff;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-number {
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    background: #ffffff;
    min-width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.143rem;
    z-index: 1;
    border-radius: 50%;
  }
  .p-steps .p-steps-item .p-menuitem-link .p-steps-title {
    margin-top: 0.5rem;
    color: #898989;
  }
  .p-steps .p-steps-item .p-menuitem-link:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-number {
    background: #ced6f1;
    color: #585858;
  }
  .p-steps .p-steps-item.p-highlight .p-steps-title {
    font-weight: 600;
    color: #6c6c6c;
  }
  .p-steps .p-steps-item:before {
    content: ' ';
    border-top: 1px solid #ebebeb;
    width: 100%;
    top: 50%;
    left: 0;
    display: block;
    position: absolute;
    margin-top: -1rem;
  }

  .p-tabmenu .p-tabmenu-nav {
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-width: 0 0 2px 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem {
    margin-right: 0;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link {
    border: solid #ebebeb;
    border-width: 0 0 2px 0;
    border-color: transparent transparent #ebebeb transparent;
    background: #ffffff;
    color: #898989;
    padding: 1rem;
    font-weight: 600;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
    transition: box-shadow 0.3s;
    margin: 0 0 -2px 0;
    height: calc(100% + 2px);
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem .p-menuitem-link .p-menuitem-icon {
    margin-right: 0.5rem;
  }
  .p-tabmenu
    .p-tabmenu-nav
    .p-tabmenuitem
    .p-menuitem-link:not(.p-disabled):focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.1rem #bbc7ee;
  }
  .p-tabmenu
    .p-tabmenu-nav
    .p-tabmenuitem:not(.p-highlight):not(.p-disabled):hover
    .p-menuitem-link {
    background: #ffffff;
    border-color: #ced6f1;
    color: #898989;
  }
  .p-tabmenu .p-tabmenu-nav .p-tabmenuitem.p-highlight .p-menuitem-link {
    background: #ffffff;
    border-color: #5472d4;
    color: #5472d4;
  }

  .p-tieredmenu {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    border-radius: 6px;
    width: 12.5rem;
  }
  .p-tieredmenu .p-menuitem-link {
    padding: 0.75rem 1rem;
    color: #6c6c6c;
    border-radius: 6px;
    transition: box-shadow 0.3s;
    user-select: none;
  }
  .p-tieredmenu .p-menuitem-link .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-tieredmenu .p-menuitem-link .p-menuitem-icon {
    color: #898989;
    margin-right: 0.5rem;
  }
  .p-tieredmenu .p-menuitem-link .p-submenu-icon {
    color: #898989;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover {
    background: #edf0fa;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-menuitem-icon {
    color: #898989;
  }
  .p-tieredmenu .p-menuitem-link:not(.p-disabled):hover .p-submenu-icon {
    color: #898989;
  }
  .p-tieredmenu .p-menuitem-link:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: inset 0 0 0 0.15rem #bbc7ee;
  }
  .p-tieredmenu.p-tieredmenu-overlay {
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-tieredmenu .p-submenu-list {
    padding: 0.5rem 0.5rem;
    background: #ffffff;
    border: 0 none;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .p-tieredmenu .p-menuitem.p-menuitem-active > .p-menuitem-link {
    background: #edf0fa;
  }
  .p-tieredmenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-text {
    color: #6c6c6c;
  }
  .p-tieredmenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-menuitem-icon,
  .p-tieredmenu
    .p-menuitem.p-menuitem-active
    > .p-menuitem-link
    .p-submenu-icon {
    color: #898989;
  }
  .p-tieredmenu .p-menu-separator {
    border-top: 1px solid #ebebeb;
    margin: 4px 0;
  }
  .p-tieredmenu .p-submenu-icon {
    font-size: 0.875rem;
    transition: transform 0.3s;
  }
  .p-tieredmenu .p-submenu-icon.p-icon {
    width: 0.875rem;
    height: 0.875rem;
  }

  .p-inline-message {
    padding: 0.5rem 0.75rem;
    margin: 0;
    border-radius: 6px;
  }
  .p-inline-message.p-inline-message-info {
    background: #e1f2f7;
    border: 4px solid #83c7e0;
    border-width: 2px;
    color: #585858;
  }
  .p-inline-message.p-inline-message-info .p-inline-message-icon {
    color: #585858;
  }
  .p-inline-message.p-inline-message-success {
    background: #f2f8e1;
    border: 4px solid #c7e084;
    border-width: 2px;
    color: #585858;
  }
  .p-inline-message.p-inline-message-success .p-inline-message-icon {
    color: #585858;
  }
  .p-inline-message.p-inline-message-warn {
    background: #ffecdb;
    border: 4px solid #ffb065;
    border-width: 2px;
    color: #585858;
  }
  .p-inline-message.p-inline-message-warn .p-inline-message-icon {
    color: #585858;
  }
  .p-inline-message.p-inline-message-error {
    background: #f7e1e6;
    border: 4px solid #de8499;
    border-width: 2px;
    color: #585858;
  }
  .p-inline-message.p-inline-message-error .p-inline-message-icon {
    color: #585858;
  }
  .p-inline-message .p-inline-message-icon {
    font-size: 1rem;
    margin-right: 0.5rem;
  }
  .p-inline-message .p-inline-message-icon.p-icon {
    width: 1rem;
    height: 1rem;
  }
  .p-inline-message .p-inline-message-text {
    font-size: 1rem;
  }
  .p-inline-message.p-inline-message-icon-only .p-inline-message-icon {
    margin-right: 0;
  }

  .p-message {
    margin: 1rem 0;
    border-radius: 6px;
  }
  .p-message .p-message-wrapper {
    padding: 1rem 1.5rem;
  }
  .p-message .p-message-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-message .p-message-close:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  .p-message .p-message-close:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-message.p-message-info {
    background: #e1f2f7;
    border: 4px solid #83c7e0;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-message.p-message-info .p-message-icon {
    color: #585858;
  }
  .p-message.p-message-info .p-message-close {
    color: #585858;
  }
  .p-message.p-message-success {
    background: #f2f8e1;
    border: 4px solid #c7e084;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-message.p-message-success .p-message-icon {
    color: #585858;
  }
  .p-message.p-message-success .p-message-close {
    color: #585858;
  }
  .p-message.p-message-warn {
    background: #ffecdb;
    border: 4px solid #ffb065;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-message.p-message-warn .p-message-icon {
    color: #585858;
  }
  .p-message.p-message-warn .p-message-close {
    color: #585858;
  }
  .p-message.p-message-error {
    background: #f7e1e6;
    border: 4px solid #de8499;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-message.p-message-error .p-message-icon {
    color: #585858;
  }
  .p-message.p-message-error .p-message-close {
    color: #585858;
  }
  .p-message .p-message-text {
    font-size: 1rem;
    font-weight: 400;
  }
  .p-message .p-message-icon {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
  .p-message .p-message-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }
  .p-message .p-message-summary {
    font-weight: 700;
  }
  .p-message .p-message-detail {
    margin-left: 0.5rem;
  }

  .p-toast {
    opacity: 0.9;
  }
  .p-toast .p-toast-message {
    margin: 0 0 1rem 0;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 6px;
  }
  .p-toast .p-toast-message .p-toast-message-content {
    padding: 1rem;
    border-width: 0 0 0 6px;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-text {
    margin: 0 0 0 1rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-message-icon {
    font-size: 2rem;
  }
  .p-toast
    .p-toast-message
    .p-toast-message-content
    .p-toast-message-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-summary {
    font-weight: 600;
  }
  .p-toast .p-toast-message .p-toast-message-content .p-toast-detail {
    margin: 0.5rem 0 0 0;
  }
  .p-toast .p-toast-message .p-toast-icon-close {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: transparent;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-toast .p-toast-message .p-toast-icon-close:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  .p-toast .p-toast-message .p-toast-icon-close:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }
  .p-toast .p-toast-message.p-toast-message-info {
    background: #e1f2f7;
    border: 4px solid #83c7e0;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-info .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-info .p-toast-icon-close {
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-success {
    background: #f2f8e1;
    border: 4px solid #c7e084;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-success .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-success .p-toast-icon-close {
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-warn {
    background: #ffecdb;
    border: 4px solid #ffb065;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-warn .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-warn .p-toast-icon-close {
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-error {
    background: #f7e1e6;
    border: 4px solid #de8499;
    border-width: 0 0 0 6px;
    color: #585858;
  }
  .p-toast .p-toast-message.p-toast-message-error .p-toast-message-icon,
  .p-toast .p-toast-message.p-toast-message-error .p-toast-icon-close {
    color: #585858;
  }

  .p-galleria .p-galleria-close {
    margin: 0.5rem;
    background: transparent;
    color: #f5f5f5;
    width: 4rem;
    height: 4rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    border-radius: 50%;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-close .p-galleria-close-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-close:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f5f5f5;
  }
  .p-galleria .p-galleria-item-nav {
    background: transparent;
    color: #f5f5f5;
    width: 4rem;
    height: 4rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    border-radius: 6px;
    margin: 0 0.5rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon,
  .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon {
    font-size: 2rem;
  }
  .p-galleria .p-galleria-item-nav .p-galleria-item-prev-icon.p-icon,
  .p-galleria .p-galleria-item-nav .p-galleria-item-next-icon.p-icon {
    width: 2rem;
    height: 2rem;
  }
  .p-galleria .p-galleria-item-nav:not(.p-disabled):hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f5f5f5;
  }
  .p-galleria .p-galleria-caption {
    background: rgba(0, 0, 0, 0.5);
    color: #f5f5f5;
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators {
    padding: 1rem;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button {
    background-color: #edf0fa;
    width: 1rem;
    height: 1rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    border-radius: 50%;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator button:hover {
    background: #ebebeb;
  }
  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background: #ced6f1;
    color: #585858;
  }
  .p-galleria.p-galleria-indicators-bottom .p-galleria-indicator,
  .p-galleria.p-galleria-indicators-top .p-galleria-indicator {
    margin-right: 0.5rem;
  }
  .p-galleria.p-galleria-indicators-left .p-galleria-indicator,
  .p-galleria.p-galleria-indicators-right .p-galleria-indicator {
    margin-bottom: 0.5rem;
  }
  .p-galleria.p-galleria-indicator-onitem .p-galleria-indicators {
    background: rgba(0, 0, 0, 0.5);
  }
  .p-galleria.p-galleria-indicator-onitem
    .p-galleria-indicators
    .p-galleria-indicator
    button {
    background: rgba(255, 255, 255, 0.4);
  }
  .p-galleria.p-galleria-indicator-onitem
    .p-galleria-indicators
    .p-galleria-indicator
    button:hover {
    background: rgba(255, 255, 255, 0.6);
  }
  .p-galleria.p-galleria-indicator-onitem
    .p-galleria-indicators
    .p-galleria-indicator.p-highlight
    button {
    background: #ced6f1;
    color: #585858;
  }
  .p-galleria .p-galleria-thumbnail-container {
    background: rgba(0, 0, 0, 0.9);
    padding: 1rem 0.25rem;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev,
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next {
    margin: 0.5rem;
    background-color: transparent;
    color: #f5f5f5;
    width: 2rem;
    height: 2rem;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    border-radius: 50%;
  }
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-prev:hover,
  .p-galleria .p-galleria-thumbnail-container .p-galleria-thumbnail-next:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #f5f5f5;
  }
  .p-galleria
    .p-galleria-thumbnail-container
    .p-galleria-thumbnail-item-content {
    transition: box-shadow 0.3s;
  }
  .p-galleria
    .p-galleria-thumbnail-container
    .p-galleria-thumbnail-item-content:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-galleria-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }

  .p-image-mask {
    --maskbg: rgba(0, 0, 0, 0.9);
  }

  .p-image-preview-indicator {
    background-color: transparent;
    color: #f8f9fa;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-image-preview-indicator .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-image-preview-container:hover > .p-image-preview-indicator {
    background-color: rgba(0, 0, 0, 0.5);
  }

  .p-image-toolbar {
    padding: 1rem;
  }

  .p-image-action.p-link {
    color: #f8f9fa;
    background-color: transparent;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    margin-right: 0.5rem;
  }
  .p-image-action.p-link:last-child {
    margin-right: 0;
  }
  .p-image-action.p-link:hover {
    color: #f8f9fa;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .p-image-action.p-link span {
    font-size: 1.5rem;
  }
  .p-image-action.p-link .p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-avatar {
    background-color: #ebebeb;
    border-radius: 6px;
  }
  .p-avatar.p-avatar-lg {
    width: 3rem;
    height: 3rem;
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-lg .p-avatar-icon {
    font-size: 1.5rem;
  }
  .p-avatar.p-avatar-xl {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }
  .p-avatar.p-avatar-xl .p-avatar-icon {
    font-size: 2rem;
  }

  .p-avatar-group .p-avatar {
    border: 2px solid #ffffff;
  }

  .p-chip {
    background-color: #ebebeb;
    color: #6c6c6c;
    border-radius: 16px;
    padding: 0 0.75rem;
  }
  .p-chip .p-chip-text {
    line-height: 1.5;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .p-chip .p-chip-icon {
    margin-right: 0.5rem;
  }
  .p-chip img {
    width: 2rem;
    height: 2rem;
    margin-left: -0.75rem;
    margin-right: 0.5rem;
  }
  .p-chip .p-chip-remove-icon {
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
    margin-left: 0.5rem;
  }
  .p-chip .p-chip-remove-icon:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-scrolltop {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
  }
  .p-scrolltop.p-link {
    background: rgba(0, 0, 0, 0.7);
  }
  .p-scrolltop.p-link:hover {
    background: rgba(0, 0, 0, 0.8);
  }
  .p-scrolltop .p-scrolltop-icon {
    font-size: 1.5rem;
    color: #f5f5f5;
  }
  .p-scrolltop .p-scrolltop-icon.p-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .p-skeleton {
    background-color: #ebebeb;
    border-radius: 6px;
  }
  .p-skeleton:after {
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0)
    );
  }

  .p-tag {
    background: #5472d4;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
  }
  .p-tag.p-tag-success {
    background-color: #8bae2c;
    color: #ffffff;
  }
  .p-tag.p-tag-info {
    background-color: #35a4cc;
    color: #ffffff;
  }
  .p-tag.p-tag-warning {
    background-color: #ff922a;
    color: #ffffff;
  }
  .p-tag.p-tag-danger {
    background-color: #d45472;
    color: #ffffff;
  }
  .p-tag .p-tag-icon {
    margin-right: 0.25rem;
    font-size: 0.75rem;
  }
  .p-tag .p-tag-icon.p-icon {
    width: 0.75rem;
    height: 0.75rem;
  }

  .p-inplace .p-inplace-display {
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    transition: background-color 0.3s, color 0.3s, border-color 0.3s,
      box-shadow 0.3s;
  }
  .p-inplace .p-inplace-display:not(.p-disabled):hover {
    background: #edf0fa;
    color: #6c6c6c;
  }
  .p-inplace .p-inplace-display:focus {
    outline: 0 none;
    outline-offset: 0;
    box-shadow: 0 0 0 0.1rem #bbc7ee;
  }

  .p-progressbar {
    border: 0 none;
    height: 1.5rem;
    background: #ebebeb;
    border-radius: 6px;
  }
  .p-progressbar .p-progressbar-value {
    border: 0 none;
    margin: 0;
    background: #5472d4;
  }
  .p-progressbar .p-progressbar-label {
    color: #ffffff;
    line-height: 1.5rem;
  }

  .p-terminal {
    background: #ffffff;
    color: #6c6c6c;
    border: 2px solid #ebebeb;
    padding: 1rem;
  }
  .p-terminal .p-terminal-input {
    font-size: 1rem;
    font-family: Poppins, sans-serif;
  }

  .p-badge {
    background: #5472d4;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    min-width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
  }
  .p-badge.p-badge-secondary {
    background-color: #8191a6;
    color: #ffffff;
  }
  .p-badge.p-badge-success {
    background-color: #8bae2c;
    color: #ffffff;
  }
  .p-badge.p-badge-info {
    background-color: #35a4cc;
    color: #ffffff;
  }
  .p-badge.p-badge-warning {
    background-color: #ff922a;
    color: #ffffff;
  }
  .p-badge.p-badge-danger {
    background-color: #d45472;
    color: #ffffff;
  }
  .p-badge.p-badge-lg {
    font-size: 1.125rem;
    min-width: 2.25rem;
    height: 2.25rem;
    line-height: 2.25rem;
  }
  .p-badge.p-badge-xl {
    font-size: 1.5rem;
    min-width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }

  .p-tag {
    background: #5472d4;
    color: #ffffff;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 6px;
  }
  .p-tag.p-tag-success {
    background-color: #8bae2c;
    color: #ffffff;
  }
  .p-tag.p-tag-info {
    background-color: #35a4cc;
    color: #ffffff;
  }
  .p-tag.p-tag-warning {
    background-color: #ff922a;
    color: #ffffff;
  }
  .p-tag.p-tag-danger {
    background-color: #d45472;
    color: #ffffff;
  }

  /* Customizations to the designer theme should be defined here */
  /* Customizations to the designer theme should be defined here */
  .p-button .p-button-label {
    font-weight: 600;
  }

  .p-buttonset .p-button-label,
  .p-togglebutton .p-button-label {
    font-weight: 400;
  }

  .p-carousel .p-carousel-indicators .p-carousel-indicator.p-highlight button {
    background-color: #5472d4;
  }

  .p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button {
    background-color: #5472d4;
  }

  .p-panel {
    border: 2px solid #ebebeb;
    border-radius: 6px;
  }
  .p-panel .p-panel-header {
    border: 0 none;
  }
  .p-panel .p-panel-content {
    border: 0 none;
  }

  .p-fieldset .p-fieldset-legend {
    border-color: transparent;
  }

  .p-accordion .p-accordion-toggle-icon {
    order: 10;
    margin-left: auto;
  }
  .p-accordion .p-accordion-toggle-icon.pi-chevron-right::before {
    content: '\e90d';
  }
  .p-accordion .p-accordion-toggle-icon.pi-chevron-down::before {
    content: '\e90f';
  }
  .p-accordion .p-accordion-header.p-highlight .p-accordion-header-link {
    padding-bottom: calc(1rem + 2px);
    border-bottom: 0 none;
  }
  .p-accordion
    .p-accordion-header:not(.p-disabled).p-highlight:hover
    .p-accordion-header-link {
    border-bottom: 0 none;
  }

  .p-inline-message.p-inline-message-info {
    border-color: #e1f2f7;
  }
  .p-inline-message.p-inline-message-success {
    border-color: #f2f8e1;
  }
  .p-inline-message.p-inline-message-warn {
    border-color: #ffecdb;
  }
  .p-inline-message.p-inline-message-error {
    border-color: #f7e1e6;
  }

  .p-inputtext:enabled:focus {
    box-shadow: none;
  }

  .p-dropdown:not(.p-disabled).p-focus {
    box-shadow: none;
  }

  .p-multiselect:not(.p-disabled).p-focus {
    box-shadow: none;
  }

  .p-cascadeselect:not(.p-disabled).p-focus {
    box-shadow: none;
  }

  .p-autocomplete.p-autocomplete-multiple:not(.p-disabled).p-focus {
    box-shadow: none;
  }

  .p-chips .p-chips-multiple-container:not(.p-disabled).p-focus {
    box-shadow: none;
  }

  .p-orderlist .p-orderlist-list {
    border-top: 0 none;
  }

  .p-picklist .p-picklist-list {
    border-top: 0 none;
  }

  .p-panelmenu .p-panelmenu-icon.pi-chevron-right,
  .p-panelmenu .p-panelmenu-icon.pi-chevron-down {
    order: 10;
    margin-left: auto;
  }
  .p-panelmenu .p-panelmenu-icon.pi-chevron-right::before {
    content: '\e90d';
  }
  .p-panelmenu .p-panelmenu-icon.pi-chevron-down::before {
    content: '\e90f';
  }
  .p-panelmenu .p-panelmenu-header.p-highlight > a {
    padding-bottom: calc(1rem + 2px);
    border-bottom: 0 none;
  }
  .p-panelmenu
    .p-panelmenu-header:not(.p-highlight):not(.p-disabled)
    > a:hover {
    padding-bottom: calc(1rem + 2px);
    border-bottom: 0 none;
  }

  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-top > td {
    box-shadow: inset 0 2px 0 0 #5472d4;
  }
  .p-datatable .p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {
    box-shadow: inset 0 -2px 0 0 #5472d4;
  }


`
export default Wrapper