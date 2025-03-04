import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{r as s,R as u}from"./index-BYq_8MfK.js";import{c as Je}from"./createLucideIcon-DamU_L0P.js";import"./_commonjsHelpers-Cpj98o6Y.js";/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Ze=Je("ChevronDown",Ge),j=r=>{switch(r){case"sm":return"text-sm py-1 px-2";case"lg":return"text-lg py-3 px-4";case"md":default:return"text-base py-2 px-3"}},B=r=>{switch(r){case"underlined":return"border-b border-gray-300 rounded-none px-0";case"text":return"bg-transparent border-none px-0";case"outlined":default:return"bg-white border border-gray-300"}},R=r=>r?"!border-red-500":"",D=r=>r?"w-full":"w-64";try{j.displayName="getSizeStyles",j.__docgenInfo={description:"Select 크기에 따른 스타일을 반환합니다.",displayName:"getSizeStyles",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"{ (locales?: string | string[]): string; (locales?: LocalesArgument): string; }"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"{ (locales?: string | string[]): string; (locales?: LocalesArgument): string; }"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>"}},replaceAll:{defaultValue:null,description:`Replace all instances of a substring in a string, using a regular expression or search string.
@param searchValue A string to search for.
@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.`,name:"replaceAll",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},at:{defaultValue:null,description:`Returns a new String consisting of the single UTF-16 code unit located at the specified index.
@param index The zero-based index of the desired code unit. A negative index will count back from the last item.`,name:"at",required:!0,type:{name:"(index: number) => string"}},isWellFormed:{defaultValue:null,description:"Returns true if all leading surrogates and trailing surrogates appear paired and in order.",name:"isWellFormed",required:!0,type:{name:"() => boolean"}},toWellFormed:{defaultValue:null,description:"Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).",name:"toWellFormed",required:!0,type:{name:"() => string"}},"__@iterator@15582":{defaultValue:null,description:"Iterator",name:"__@iterator@15582",required:!0,type:{name:"() => StringIterator<string>"}}}}}catch{}try{B.displayName="getVariantStyles",B.__docgenInfo={description:"Select 변형에 따른 스타일을 반환합니다.",displayName:"getVariantStyles",props:{toString:{defaultValue:null,description:"Returns a string representation of a string.",name:"toString",required:!1,type:{name:"() => string"}},charAt:{defaultValue:null,description:`Returns the character at the specified index.
@param pos The zero-based index of the desired character.`,name:"charAt",required:!0,type:{name:"(pos: number) => string"}},charCodeAt:{defaultValue:null,description:`Returns the Unicode value of the character at the specified location.
@param index The zero-based index of the desired character. If there is no character at the specified index, NaN is returned.`,name:"charCodeAt",required:!0,type:{name:"(index: number) => number"}},concat:{defaultValue:null,description:`Returns a string that contains the concatenation of two or more strings.
@param strings The strings to append to the end of the string.`,name:"concat",required:!0,type:{name:"(...strings: string[]) => string"}},indexOf:{defaultValue:null,description:`Returns the position of the first occurrence of a substring.
@param searchString The substring to search for in the string
@param position The index at which to begin searching the String object. If omitted, search starts at the beginning of the string.`,name:"indexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},lastIndexOf:{defaultValue:null,description:`Returns the last occurrence of a substring in the string.
@param searchString The substring to search for.
@param position The index at which to begin searching. If omitted, the search begins at the end of the string.`,name:"lastIndexOf",required:!0,type:{name:"(searchString: string, position?: number) => number"}},localeCompare:{defaultValue:null,description:`Determines whether two strings are equivalent in the current locale.
Determines whether two strings are equivalent in the current or specified locale.
@param that String to compare to target string
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.
@param that String to compare to target string
@param locales A locale string or array of locale strings that contain one or more language or locale tags. If you include more than one locale string, list them in descending order of priority so that the first entry is the preferred locale. If you omit this parameter, the default locale of the JavaScript runtime is used. This parameter must conform to BCP 47 standards; see the Intl.Collator object for details.
@param options An object that contains one or more properties that specify comparison options. see the Intl.Collator object for details.`,name:"localeCompare",required:!0,type:{name:"{ (that: string): number; (that: string, locales?: string | string[], options?: CollatorOptions): number; (that: string, locales?: LocalesArgument, options?: CollatorOptions): number; }"}},match:{defaultValue:null,description:`Matches a string with a regular expression, and returns an array containing the results of that search.
Matches a string or an object that supports being matched against, and returns an array
containing the results of that search, or null if no matches are found.
@param regexp A variable name or string literal containing the regular expression pattern and flags.
@param matcher An object that supports being matched against.`,name:"match",required:!0,type:{name:"{ (regexp: string | RegExp): RegExpMatchArray; (matcher: { [Symbol.match](string: string): RegExpMatchArray; }): RegExpMatchArray; }"}},replace:{defaultValue:null,description:`Replaces text in a string, using a regular expression or search string.
Passes a string and {@linkcode replaceValue} to the \`[Symbol.replace]\` method on {@linkcode searchValue}. This method is expected to implement its own replacement algorithm.
Replaces text in a string, using an object that supports replacement within a string.
@param searchValue A string or regular expression to search for.
@param replaceValue A string containing the text to replace. When the {@linkcode searchValue } is a \`RegExp\`, all matches are replaced if the \`g\` flag is set (or only those matches at the beginning, if the \`y\` flag is also present). Otherwise, only the first match of {@linkcode searchValue } is replaced.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.
@param searchValue An object that supports searching for and replacing matches within a string.
@param replaceValue The replacement text.
@param searchValue A object can search for and replace matches within a string.
@param replacer A function that returns the replacement text.`,name:"replace",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; (searchValue: { ...; }, replaceValue: string): string; (searchValue: { ...; }, replacer: (substring: string, ...args: any[]) => string): string; }"}},search:{defaultValue:null,description:`Finds the first substring match in a regular expression search.
@param regexp The regular expression pattern and applicable flags.
@param searcher An object which supports searching within a string.`,name:"search",required:!0,type:{name:"{ (regexp: string | RegExp): number; (searcher: { [Symbol.search](string: string): number; }): number; }"}},slice:{defaultValue:null,description:`Returns a section of a string.
@param start The index to the beginning of the specified portion of stringObj.
@param end The index to the end of the specified portion of stringObj. The substring includes the characters up to, but not including, the character indicated by end.
If this value is not specified, the substring continues to the end of stringObj.`,name:"slice",required:!0,type:{name:"(start?: number, end?: number) => string"}},split:{defaultValue:null,description:`Split a string into substrings using the specified separator and return them as an array.
@param separator A string that identifies character or characters to use in separating the string. If omitted, a single-element array containing the entire string is returned.
@param limit A value used to limit the number of elements returned in the array.
@param splitter An object that can split a string.
@param limit A value used to limit the number of elements returned in the array.`,name:"split",required:!0,type:{name:"{ (separator: string | RegExp, limit?: number): string[]; (splitter: { [Symbol.split](string: string, limit?: number): string[]; }, limit?: number): string[]; }"}},substring:{defaultValue:null,description:`Returns the substring at the specified location within a String object.
@param start The zero-based index number indicating the beginning of the substring.
@param end Zero-based index number indicating the end of the substring. The substring includes the characters up to, but not including, the character indicated by end.
If end is omitted, the characters from start through the end of the original string are returned.`,name:"substring",required:!0,type:{name:"(start: number, end?: number) => string"}},toLowerCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to lowercase.",name:"toLowerCase",required:!0,type:{name:"() => string"}},toLocaleLowerCase:{defaultValue:null,description:"Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.",name:"toLocaleLowerCase",required:!0,type:{name:"{ (locales?: string | string[]): string; (locales?: LocalesArgument): string; }"}},toUpperCase:{defaultValue:null,description:"Converts all the alphabetic characters in a string to uppercase.",name:"toUpperCase",required:!0,type:{name:"() => string"}},toLocaleUpperCase:{defaultValue:null,description:"Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.",name:"toLocaleUpperCase",required:!0,type:{name:"{ (locales?: string | string[]): string; (locales?: LocalesArgument): string; }"}},trim:{defaultValue:null,description:"Removes the leading and trailing white space and line terminator characters from a string.",name:"trim",required:!0,type:{name:"() => string"}},length:{defaultValue:null,description:"Returns the length of a String object.",name:"length",required:!0,type:{name:"number"}},substr:{defaultValue:null,description:`Gets a substring beginning at the specified location and having the specified length.
@deprecated A legacy feature for browser compatibility
@param from The starting position of the desired substring. The index of the first character in the string is zero.
@param length The number of characters to include in the returned substring.`,name:"substr",required:!0,type:{name:"(from: number, length?: number) => string"}},valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => string"}},codePointAt:{defaultValue:null,description:`Returns a nonnegative integer Number less than 1114112 (0x110000) that is the code point
value of the UTF-16 encoded code point starting at the string element at position pos in
the String resulting from converting this object to a String.
If there is no element at that position, the result is undefined.
If a valid UTF-16 surrogate pair does not begin at pos, the result is the code unit at pos.`,name:"codePointAt",required:!0,type:{name:"(pos: number) => number"}},includes:{defaultValue:null,description:`Returns true if searchString appears as a substring of the result of converting this
object to a String, at one or more positions that are
greater than or equal to position; otherwise, returns false.
@param searchString search string
@param position If position is undefined, 0 is assumed, so as to search all of the String.`,name:"includes",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},endsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
endPosition – length(this). Otherwise returns false.`,name:"endsWith",required:!0,type:{name:"(searchString: string, endPosition?: number) => boolean"}},normalize:{defaultValue:null,description:`Returns the String value result of normalizing the string into the normalization form
named by form as specified in Unicode Standard Annex #15, Unicode Normalization Forms.
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"
@param form Applicable values: "NFC", "NFD", "NFKC", or "NFKD", If not specified default
is "NFC"`,name:"normalize",required:!0,type:{name:'{ (form: "NFC" | "NFD" | "NFKC" | "NFKD"): string; (form?: string): string; }'}},repeat:{defaultValue:null,description:`Returns a String value that is made from count copies appended together. If count is 0,
the empty string is returned.
@param count number of copies to append`,name:"repeat",required:!0,type:{name:"(count: number) => string"}},startsWith:{defaultValue:null,description:`Returns true if the sequence of elements of searchString converted to a String is the
same as the corresponding elements of this object (converted to a String) starting at
position. Otherwise returns false.`,name:"startsWith",required:!0,type:{name:"(searchString: string, position?: number) => boolean"}},anchor:{defaultValue:null,description:"Returns an `<a>` HTML anchor element and sets the name attribute to the text value\n@deprecated A legacy feature for browser compatibility\n@param name",name:"anchor",required:!0,type:{name:"(name: string) => string"}},big:{defaultValue:null,description:"Returns a `<big>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"big",required:!0,type:{name:"() => string"}},blink:{defaultValue:null,description:"Returns a `<blink>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"blink",required:!0,type:{name:"() => string"}},bold:{defaultValue:null,description:"Returns a `<b>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"bold",required:!0,type:{name:"() => string"}},fixed:{defaultValue:null,description:"Returns a `<tt>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"fixed",required:!0,type:{name:"() => string"}},fontcolor:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the color attribute value\n@deprecated A legacy feature for browser compatibility",name:"fontcolor",required:!0,type:{name:"(color: string) => string"}},fontsize:{defaultValue:null,description:"Returns a `<font>` HTML element and sets the size attribute value\n@deprecated A legacy feature for browser compatibility\n@deprecated A legacy feature for browser compatibility",name:"fontsize",required:!0,type:{name:"{ (size: number): string; (size: string): string; }"}},italics:{defaultValue:null,description:"Returns an `<i>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"italics",required:!0,type:{name:"() => string"}},link:{defaultValue:null,description:"Returns an `<a>` HTML element and sets the href attribute value\n@deprecated A legacy feature for browser compatibility",name:"link",required:!0,type:{name:"(url: string) => string"}},small:{defaultValue:null,description:"Returns a `<small>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"small",required:!0,type:{name:"() => string"}},strike:{defaultValue:null,description:"Returns a `<strike>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"strike",required:!0,type:{name:"() => string"}},sub:{defaultValue:null,description:"Returns a `<sub>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sub",required:!0,type:{name:"() => string"}},sup:{defaultValue:null,description:"Returns a `<sup>` HTML element\n@deprecated A legacy feature for browser compatibility",name:"sup",required:!0,type:{name:"() => string"}},padStart:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the start (left) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padStart",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},padEnd:{defaultValue:null,description:`Pads the current string with a given string (possibly repeated) so that the resulting string reaches a given length.
The padding is applied from the end (right) of the current string.
@param maxLength The length of the resulting string once the current string has been padded.
If this parameter is smaller than the current string's length, the current string will be returned as it is.
@param fillString The string to pad the current string with.
If this string is too long, it will be truncated and the left-most part will be applied.
The default value for this parameter is " " (U+0020).`,name:"padEnd",required:!0,type:{name:"(maxLength: number, fillString?: string) => string"}},trimEnd:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.",name:"trimEnd",required:!0,type:{name:"() => string"}},trimStart:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.",name:"trimStart",required:!0,type:{name:"() => string"}},trimLeft:{defaultValue:null,description:"Removes the leading white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimStart` instead",name:"trimLeft",required:!0,type:{name:"() => string"}},trimRight:{defaultValue:null,description:"Removes the trailing white space and line terminator characters from a string.\n@deprecated A legacy feature for browser compatibility. Use `trimEnd` instead",name:"trimRight",required:!0,type:{name:"() => string"}},matchAll:{defaultValue:null,description:`Matches a string with a regular expression, and returns an iterable of matches
containing the results of that search.
@param regexp A variable name or string literal containing the regular expression pattern and flags.`,name:"matchAll",required:!0,type:{name:"(regexp: RegExp) => RegExpStringIterator<RegExpExecArray>"}},replaceAll:{defaultValue:null,description:`Replace all instances of a substring in a string, using a regular expression or search string.
@param searchValue A string to search for.
@param replaceValue A string containing the text to replace for every successful match of searchValue in this string.
@param searchValue A string to search for.
@param replacer A function that returns the replacement text.`,name:"replaceAll",required:!0,type:{name:"{ (searchValue: string | RegExp, replaceValue: string): string; (searchValue: string | RegExp, replacer: (substring: string, ...args: any[]) => string): string; }"}},at:{defaultValue:null,description:`Returns a new String consisting of the single UTF-16 code unit located at the specified index.
@param index The zero-based index of the desired code unit. A negative index will count back from the last item.`,name:"at",required:!0,type:{name:"(index: number) => string"}},isWellFormed:{defaultValue:null,description:"Returns true if all leading surrogates and trailing surrogates appear paired and in order.",name:"isWellFormed",required:!0,type:{name:"() => boolean"}},toWellFormed:{defaultValue:null,description:"Returns a string where all lone or out-of-order surrogates have been replaced by the Unicode replacement character (U+FFFD).",name:"toWellFormed",required:!0,type:{name:"() => string"}},"__@iterator@15582":{defaultValue:null,description:"Iterator",name:"__@iterator@15582",required:!0,type:{name:"() => StringIterator<string>"}}}}}catch{}try{R.displayName="getErrorStyles",R.__docgenInfo={description:"Select 에러 상태에 따른 스타일을 반환합니다.",displayName:"getErrorStyles",props:{valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => boolean"}}}}}catch{}try{D.displayName="getWidthStyles",D.__docgenInfo={description:"Select 너비에 따른 스타일을 반환합니다.",displayName:"getWidthStyles",props:{valueOf:{defaultValue:null,description:"Returns the primitive value of the specified object.",name:"valueOf",required:!1,type:{name:"() => boolean"}}}}}catch{}const t=({value:r,children:i,disabled:l,className:x})=>e.jsx("div",{"data-value":r,className:`cursor-pointer px-4 py-2 hover:bg-gray-100 ${l?"cursor-not-allowed opacity-50":""} ${x||""}`,children:i}),n=r=>{const{value:i,defaultValue:l,onChange:x,placeholder:E,disabled:A=!1,required:T=!1,fullWidth:ke=!1,size:Oe="md",variant:Ue="outlined",error:N=!1,errorText:L,className:We,children:c,id:_,name:He}=r,[V,w]=s.useState(!1),[o,F]=s.useState(i!==void 0?i:l),[Pe,z]=s.useState(""),q=s.useRef(null);s.useEffect(()=>{const a=I=>{q.current&&!q.current.contains(I.target)&&w(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),s.useEffect(()=>{i!==void 0&&(F(i),u.Children.forEach(c,a=>{u.isValidElement(a)&&a.props.value===i&&z(a.props.children)}))},[i,c]),s.useEffect(()=>{o!==void 0&&u.Children.forEach(c,a=>{u.isValidElement(a)&&a.props.value===o&&z(a.props.children)})},[o,c]);const Ke=a=>{F(a),w(!1),x&&x(a)};return e.jsxs("div",{className:`inline-block ${D(ke)} ${We||""}`,ref:q,children:[e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:`
            flex cursor-pointer items-center justify-between rounded
            ${B(Ue)}
            ${j(Oe)}
            ${R(N)}
            ${A?"cursor-not-allowed bg-gray-50 opacity-50":"hover:border-gray-400"}
            transition-colors duration-200
          `,onClick:()=>!A&&w(!V),tabIndex:A?-1:0,role:"combobox","aria-expanded":V,"aria-haspopup":"listbox","aria-labelledby":_,"aria-required":T,id:_,"data-name":He,children:[e.jsxs("div",{className:`flex grow items-center justify-between truncate ${!o&&E?"text-gray-400":""}`,children:[o?Pe:E||"",T&&!o&&e.jsx("span",{className:"ml-1.5 text-xs text-red-500",children:"필수*"})]}),e.jsx(Ze,{size:20,className:`ml-2 transition-transform duration-200 ${V?"rotate-180":""}`})]}),V&&e.jsx("div",{className:"absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded border border-gray-300 bg-white shadow-lg",children:u.Children.map(c,a=>{if(!u.isValidElement(a))return null;const{value:I,disabled:$e}=a.props;return e.jsx("div",{onClick:()=>!$e&&Ke(I),className:`${o===I?"bg-blue-50 text-blue-800":""}`,children:a})})})]}),N&&L&&e.jsx("div",{className:"mt-1 text-sm text-red-500",children:L})]})};try{t.displayName="SelectItem",t.__docgenInfo={description:`Koast/ui SelectItem 컴포넌트입니다.
Select 컴포넌트의 옵션으로 사용됩니다.`,displayName:"SelectItem",props:{value:{defaultValue:null,description:"SelectItem의 값입니다.",name:"value",required:!0,type:{name:"string | number"}},children:{defaultValue:null,description:"SelectItem의 자식 요소입니다.",name:"children",required:!0,type:{name:"React.ReactNode"}},disabled:{defaultValue:{value:"false"},description:"SelectItem의 비활성화 상태를 지정합니다.",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"SelectItem에 추가할 CSS 클래스명입니다.",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{n.displayName="Select",n.__docgenInfo={description:`Koast/ui Select 컴포넌트입니다.
사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.`,displayName:"Select",props:{value:{defaultValue:null,description:"Select의 값입니다.",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"기본 값입니다. (비제어 컴포넌트로 사용할 때)",name:"defaultValue",required:!1,type:{name:"string | number"}},onChange:{defaultValue:null,description:"값이 변경될 때 호출되는 함수입니다.",name:"onChange",required:!1,type:{name:"(value: T) => void"}},placeholder:{defaultValue:null,description:"Select의 placeholder입니다.",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"Select의 비활성화 상태를 지정합니다.",name:"disabled",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"false"},description:"Select의 필수 입력 여부를 지정합니다.",name:"required",required:!1,type:{name:"boolean"}},fullWidth:{defaultValue:{value:"false"},description:"Select의 전체 너비 사용 여부를 지정합니다.",name:"fullWidth",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'md'"},description:"Select의 크기를 지정합니다.",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},error:{defaultValue:{value:"false"},description:"Select의 에러 상태를 지정합니다.",name:"error",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'outlined'"},description:"Select의 변형을 지정합니다.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outlined"'},{value:'"underlined"'},{value:'"text"'}]}},errorText:{defaultValue:null,description:"Select에 에러가 났을 때 하단에 표시할 텍스트입니다.",name:"errorText",required:!1,type:{name:"React.ReactNode"}},className:{defaultValue:null,description:"Select에 추가할 CSS 클래스명입니다.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Select의 자식 요소입니다. (SelectItem 컴포넌트들)",name:"children",required:!0,type:{name:"React.ReactNode"}},id:{defaultValue:null,description:"Select의 ID입니다.",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"Select의 이름입니다.",name:"name",required:!1,type:{name:"string"}}}}}catch{}const Qe={title:"Components/Select",component:n,parameters:{layout:"centered",docs:{description:{component:`Select 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.
다양한 크기, 변형, 상태를 지원합니다.`}}},tags:["autodocs"],argTypes:{value:{control:"text",description:"Select의 값입니다."},defaultValue:{control:"text",description:"기본 값입니다. (비제어 컴포넌트로 사용할 때)"},placeholder:{control:"text",description:"Select의 placeholder입니다.",defaultValue:"선택하세요"},disabled:{control:"boolean",description:"Select의 비활성화 상태를 지정합니다.",defaultValue:!1},required:{control:"boolean",description:"Select의 필수 입력 여부를 지정합니다.",defaultValue:!1},fullWidth:{control:"boolean",description:"Select의 전체 너비 사용 여부를 지정합니다.",defaultValue:!1},size:{control:"radio",options:["sm","md","lg"],description:"Select의 크기를 지정합니다.",defaultValue:"md"},error:{control:"boolean",description:"Select의 에러 상태를 지정합니다.",defaultValue:!1},variant:{control:"radio",options:["outlined","underlined","text"],description:"Select의 변형을 지정합니다.",defaultValue:"outlined"},errorText:{control:"text",description:"Select에 에러가 났을 때 하단에 표시할 텍스트입니다."}}};var rt=Qe;const d={render:()=>e.jsxs(n,{placeholder:"선택하세요",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"}),e.jsx(t,{value:"option3",children:"옵션 3"})]})},p={render:()=>{const[r,i]=s.useState("option2");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{children:["선택된 값: ",r]}),e.jsxs(n,{value:r,onChange:l=>i(l),children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"}),e.jsx(t,{value:"option3",children:"옵션 3"})]})]})}},m={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(n,{variant:"outlined",placeholder:"outlined",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]}),e.jsxs(n,{variant:"underlined",placeholder:"underlined",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]}),e.jsxs(n,{variant:"text",placeholder:"text",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]})]})},h={render:()=>e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsxs(n,{size:"sm",placeholder:"Small",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]}),e.jsxs(n,{size:"md",placeholder:"Medium",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]}),e.jsxs(n,{size:"lg",placeholder:"Large",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]})]})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(n,{disabled:!0,placeholder:"비활성화된 Select",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]}),e.jsxs(n,{placeholder:"비활성화된 옵션이 있는 Select",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",disabled:!0,children:"옵션 2 (비활성화)"}),e.jsx(t,{value:"option3",children:"옵션 3"})]})]})},f={render:()=>e.jsxs(n,{required:!0,placeholder:"필수 입력 항목",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]})},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(n,{error:!0,placeholder:"에러 상태",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]}),e.jsxs(n,{error:!0,errorText:"필수 항목을 선택해주세요",placeholder:"에러 메시지 포함",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"})]})]})},y={render:()=>e.jsx("div",{className:"w-80",children:e.jsxs(n,{fullWidth:!0,placeholder:"전체 너비 Select",children:[e.jsx(t,{value:"option1",children:"옵션 1"}),e.jsx(t,{value:"option2",children:"옵션 2"}),e.jsx(t,{value:"option3",children:"옵션 3"})]})})},S={render:()=>e.jsxs(n,{placeholder:"국가 선택",children:[e.jsx(t,{value:"kr",children:"대한민국"}),e.jsx(t,{value:"us",children:"미국"}),e.jsx(t,{value:"jp",children:"일본"}),e.jsx(t,{value:"cn",children:"중국"}),e.jsx(t,{value:"gb",children:"영국"}),e.jsx(t,{value:"fr",children:"프랑스"}),e.jsx(t,{value:"de",children:"독일"}),e.jsx(t,{value:"it",children:"이탈리아"}),e.jsx(t,{value:"es",children:"스페인"}),e.jsx(t,{value:"ca",children:"캐나다"})]})},C={render:()=>{const[r,i]=s.useState(20);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("p",{children:["선택된 값: ",r]}),e.jsxs(n,{value:r,onChange:l=>i(l),placeholder:"나이 선택",children:[e.jsx(t,{value:10,children:"10세"}),e.jsx(t,{value:20,children:"20세"}),e.jsx(t,{value:30,children:"30세"}),e.jsx(t,{value:40,children:"40세"}),e.jsx(t,{value:50,children:"50세"})]})]})}},v={render:()=>e.jsxs(n,{variant:"text",className:"border-2 border-purple-500 bg-purple-50",placeholder:"커스텀 스타일 Select",children:[e.jsx(t,{value:"option1",className:"text-purple-700 hover:bg-purple-100",children:"커스텀 옵션 1"}),e.jsx(t,{value:"option2",className:"text-purple-700 hover:bg-purple-100",children:"커스텀 옵션 2"})]})};var M,k,O,U,W;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Select placeholder={'선택하세요'}>
      <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
      <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
    </Select>
}`,...(O=(k=d.parameters)==null?void 0:k.docs)==null?void 0:O.source},description:{story:"기본 Select 예시입니다.",...(W=(U=d.parameters)==null?void 0:U.docs)==null?void 0:W.description}}};var H,P,K,$,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>('option2');
    return <div className={'flex flex-col gap-4'}>
        <p>{'선택된 값: '}{value}</p>
        <Select value={value} onChange={newValue => setValue(newValue as string)}>
          <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
          <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
          <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
        </Select>
      </div>;
  }
}`,...(K=(P=p.parameters)==null?void 0:P.docs)==null?void 0:K.source},description:{story:"제어 컴포넌트로 사용하는 Select 예시입니다.",...(J=($=p.parameters)==null?void 0:$.docs)==null?void 0:J.description}}};var G,Z,Q,X,Y;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className={'flex gap-4'}>
      <Select variant={'outlined'} placeholder={'outlined'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select variant={'underlined'} placeholder={'underlined'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select variant={'text'} placeholder={'text'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
    </div>
}`,...(Q=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:Q.source},description:{story:"Select 변형(variant) 예시입니다.",...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var ee,te,re,ne,ae;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className={'flex items-end gap-4'}>
      <Select size={'sm'} placeholder={'Small'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select size={'md'} placeholder={'Medium'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
      <Select size={'lg'} placeholder={'Large'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
    </div>
}`,...(re=(te=h.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"Select 크기(size) 예시입니다.",...(ae=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ae.description}}};var ie,se,le,oe,ue;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className={'flex flex-col gap-4'}>
      <Select disabled placeholder={'비활성화된 Select'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>

      <Select placeholder={'비활성화된 옵션이 있는 Select'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'} disabled>{'옵션 2 (비활성화)'}</SelectItem>
        <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
      </Select>
    </div>
}`,...(le=(se=g.parameters)==null?void 0:se.docs)==null?void 0:le.source},description:{story:"비활성화된 Select 예시입니다.",...(ue=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:ue.description}}};var ce,de,pe,me,he;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Select required placeholder={'필수 입력 항목'}>
      <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
      <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
    </Select>
}`,...(pe=(de=f.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"필수 입력 Select 예시입니다.",...(he=(me=f.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var ge,fe,be,ye,Se;b.parameters={...b.parameters,docs:{...(ge=b.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className={'flex flex-col gap-4'}>
      <Select error placeholder={'에러 상태'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>

      <Select error errorText={'필수 항목을 선택해주세요'} placeholder={'에러 메시지 포함'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
      </Select>
    </div>
}`,...(be=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:be.source},description:{story:"에러 상태의 Select 예시입니다.",...(Se=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:Se.description}}};var Ce,ve,xe,Ve,Ie;y.parameters={...y.parameters,docs:{...(Ce=y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className={'w-80'}>
      <Select fullWidth placeholder={'전체 너비 Select'}>
        <SelectItem value={'option1'}>{'옵션 1'}</SelectItem>
        <SelectItem value={'option2'}>{'옵션 2'}</SelectItem>
        <SelectItem value={'option3'}>{'옵션 3'}</SelectItem>
      </Select>
    </div>
}`,...(xe=(ve=y.parameters)==null?void 0:ve.docs)==null?void 0:xe.source},description:{story:"전체 너비(fullWidth) Select 예시입니다.",...(Ie=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:Ie.description}}};var Ae,we,qe,je,Be;S.parameters={...S.parameters,docs:{...(Ae=S.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => <Select placeholder={'국가 선택'}>
      <SelectItem value={'kr'}>{'대한민국'}</SelectItem>
      <SelectItem value={'us'}>{'미국'}</SelectItem>
      <SelectItem value={'jp'}>{'일본'}</SelectItem>
      <SelectItem value={'cn'}>{'중국'}</SelectItem>
      <SelectItem value={'gb'}>{'영국'}</SelectItem>
      <SelectItem value={'fr'}>{'프랑스'}</SelectItem>
      <SelectItem value={'de'}>{'독일'}</SelectItem>
      <SelectItem value={'it'}>{'이탈리아'}</SelectItem>
      <SelectItem value={'es'}>{'스페인'}</SelectItem>
      <SelectItem value={'ca'}>{'캐나다'}</SelectItem>
    </Select>
}`,...(qe=(we=S.parameters)==null?void 0:we.docs)==null?void 0:qe.source},description:{story:"다양한 옵션을 가진 Select 예시입니다.",...(Be=(je=S.parameters)==null?void 0:je.docs)==null?void 0:Be.description}}};var Re,De,Ee,Te,Ne;C.parameters={...C.parameters,docs:{...(Re=C.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<number>(20);
    return <div className={'flex flex-col gap-4'}>
        <p>{'선택된 값: '}{value}</p>
        <Select<number> value={value} onChange={newValue => setValue(newValue)} placeholder={'나이 선택'}>
          <SelectItem value={10}>{'10세'}</SelectItem>
          <SelectItem value={20}>{'20세'}</SelectItem>
          <SelectItem value={30}>{'30세'}</SelectItem>
          <SelectItem value={40}>{'40세'}</SelectItem>
          <SelectItem value={50}>{'50세'}</SelectItem>
        </Select>
      </div>;
  }
}`,...(Ee=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Ee.source},description:{story:"숫자 값을 가진 Select 예시입니다.",...(Ne=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:Ne.description}}};var Le,_e,Fe,ze,Me;v.parameters={...v.parameters,docs:{...(Le=v.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <Select variant={'text'} className={'border-2 border-purple-500 bg-purple-50'} placeholder={'커스텀 스타일 Select'}>
      <SelectItem value={'option1'} className={'text-purple-700 hover:bg-purple-100'}>
        {'커스텀 옵션 1'}
      </SelectItem>
      <SelectItem value={'option2'} className={'text-purple-700 hover:bg-purple-100'}>
        {'커스텀 옵션 2'}
      </SelectItem>
    </Select>
}`,...(Fe=(_e=v.parameters)==null?void 0:_e.docs)==null?void 0:Fe.source},description:{story:"커스텀 스타일이 적용된 Select 예시입니다.",...(Me=(ze=v.parameters)==null?void 0:ze.docs)==null?void 0:Me.description}}};const nt=["Controlled","CustomStyled","Default","Disabled","Error","FullWidth","ManyOptions","NumberValues","Required","Sizes","Variants"];export{p as Controlled,v as CustomStyled,d as Default,g as Disabled,b as Error,y as FullWidth,S as ManyOptions,C as NumberValues,f as Required,h as Sizes,m as Variants,nt as __namedExportsOrder,rt as default};
