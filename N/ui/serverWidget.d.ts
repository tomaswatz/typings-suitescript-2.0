import {Operator} from '../search';

interface AddButtonOptions {
    /** The internal ID of the button. If you are adding the button to an existing page, the internal ID must be in lowercase, contain no spaces, and include the prefix custpage. */
    id: string;
    /** The label for this button. */
    label: string;
    /** The function name to be triggered on a click event. */
    functionName?: string;
}

interface AddCredentialFieldOptions {
    /** The internal ID of the credential field. The internal ID must be in lowercase, contain no spaces, and include the prefix custpage if you are adding the field to an existing page. */
    id: string;
    /** The label for the credential field. */
    label: string;
    /**
     * Controls whether use of this credential is restricted to the same user that originally entered the credential.
     * - By default, the value is false – multiple users can use the credential. For example, multiple clerks at a store making secure calls to a credit processor using a credential that represents the company they work for.
     * - If set to true, the credentials apply to a single user.
     */
    restrictToCurrentUser?: boolean;
    /**
     * The domain that the credentials can be sent to, such as 'www.mysite.com'. Credentials cannot be sent to a domain that is not specified here.
     * This value can be a domain or a list of domains to which the credentials can be sent.
     */
    restrictToDomains?: string | string[];
    /** The ID of the script that is allowed to use this credential field. For example, 'customscript_my_script'. */
    restrictToScriptIds?: string | string[];
    /** The internal ID of the tab or field group to add the credential field to. By default, the field is added to the main section of the form. */
    container?: string;
}

interface AddFieldGroupOptions {
    /** An internal ID for the field group. */
    id: string;
    /** The label for this field group. */
    label: string;
    /** The internal ID of the tab to add the field group to. By default, the field group is added to the main section of the form. */
    tab?: string;
}

interface AddFieldOptions {
    /**
     * The internal ID of the field.
     * The internal ID must be in lowercase, contain no spaces, and include
     * the prefix custpage if you are adding the field to an existing page. For
     * example, if you add a field that appears as Purchase Details, the field
     * internal ID should be something similar to custpage_purchasedetails or
     * custpage_purchase_details.
     */
    id: string;
    /** The label for this field. */
    label: string;
    /** The field type for the field. Use the serverWidget.FieldType enum to define the field type. */
    type: FieldType;
    /**
     * The internalId or scriptId of the source list for this field if it is a select (List/Record) or multi-select field.
     * Note: For radio fields only, the source parameter must contain the internal ID for the field.
     * For more information about working with radio buttons, see "Working with Radio Buttons" in Help.
     */
    source?: string;
    /**
     * The internal ID of the tab or field group to add the field to.
     * By default, the field is added to the main section of the form.
     */
    container?: string;
}

interface AddPageLinkOptions {
    /** The text label for the link. */
    title: string;
    /** The type of page link to add. Use the serverWidget.FormPageLinkType enum to set the value. */
    type: FormPageLinkType;
    /** The URL for the link. */
    url: string;
}

interface AddResetButtonOptions {
    /** The label used for this button. If no label is provided, the label defaults to Reset. */
    label: string;
}

interface AddSelectOptionOptions {
    value: string;
    text: string;
    isSelected?: boolean;
}

interface AddSublistOptions {
    /** The internal ID name of the sublist. */
    id: string;
    /** The label for this sublist. */
    label: string;
    /** The tab under which to display this sublist. If empty, the sublist is added to the main tab. */
    tab?: string;
    /** The sublist type. Use the serverWidget.SublistType enum to set the value. */
    type: SublistType;
}

interface AddSubmitButtonOptions {
    /** The label for this button. If no label is provided, the label defaults to “Save”. */
    label?: string;
}

interface AddSubtabOptions {
    /** The internal ID name of the subtab. */
    id: string;
    /** The label for this subtab. */
    label: string;
    /** The tab under which to display this sublist. If empty, the sublist is added to the main tab. */
    tab?: string;
}

interface CreateAssistantOptions {
    /** The title of the form. */
    title: string;
    /**
     * Indicates whether to hide the navigation bar menu.
     * By default, set to false. The header appears in the top-right corner on the form.
     * If set to true, the header on the assistant is hidden from view.
     */
    hideNavBar?: boolean;
}

interface IDOptions {
    /** The internal ID name of the field. */
    id: string;
}

// interface GetFieldOptions {
//     id: string;
//     radio?: string;
// }

interface GetSelectOptionsOpts {
    filter?: string;
    filteroperator?: Operator;
}

interface GetSublistFieldIdsOptions {
    group: string;
}

interface GetSublistValueOptions {
    group: string;
    id: number;
    line: string;
}

interface InsertFieldOptions {
    field: string;
    nextfield: string;
}

interface InsertSublistOptions {
    sublist: string;
    nextsublist: string;
}

interface InsertSubtabOptions {
    subtab: string;
    nextsubtab: string;
}

interface SetDefaultValuesOptions {
    values: Object;
}

interface SetHelpTextOptions {
    help: string;
    showInlineForAssistant?: boolean;
}

interface SublistGetSublistValueOptions {
    id: string;
    line: number;
}

interface SublistSetSublistValueOptions {
    id: string;
    line: number;
    value: string;
}

interface SetSplashOptions {
    title: string,
    text1: string,
    text2?: string
}

interface UpdateBreakTypeOptions {
    breakType: FieldBreakType;
}

interface UpdateDisplaySizeOptions {
    height: number;
    width: number;
}

interface UpdateDisplayTypeOptions {
    displayType: FieldDisplayType;
}

interface UpdateLayoutTypeOptions {
    layoutType: FieldLayoutType;
}

export interface Assistant {
    addField(options: AddFieldOptions): Field;
    addFieldGroup(options: AddFieldGroupOptions): FieldGroup;
    addStep(options: AddFieldGroupOptions): AssistantStep;
    addSublist(options: AddSublistOptions): Sublist;
    // clientScript(options: ClientScriptOptions): void;
    getField(options: IDOptions): Field;
    getFieldGroup(options: IDOptions): FieldGroup;
    getFieldGroupIds(): string[];
    getFieldIds(): string; // not string[]?? may need testing.
    getLastAction(): AssistantSubmitAction;
    getLastStep(): AssistantStep;
    getNextStep(): AssistantStep;
    getStep(options: IDOptions): AssistantStep;
    getStepCount(): number;
    getSteps(): AssistantStep[];
    getSublist(options: IDOptions): Sublist;
    getSublistIds(): string[];
    hasErrorHtml(): boolean;
    isFinished(): boolean;
    sendRedirect(): void;
    setSplash(options: SetSplashOptions): void;
    clientScriptFileId: number;
    currentStep: void;
    defaultValues: string[];
    errorHtml: string; // Error message text for the current step
    finishedHtml: string; // The text to display after the assistant finishes. For example “You have completed the Small Business Setup Assistant. Take the rest of the day off”.
    hideAddToShortcutsLink: boolean;
    hideStepNumber: boolean;
    isNotOrdered: boolean;
    title: string;
}

export interface AssistantStep {
    getFieldIds(): string[];
    getSublistFieldIds(options: GetSublistFieldIdsOptions): string[];
    getLineCount(options: GetSublistFieldIdsOptions): number;
    getSubmittedSublistIds(): string[];
    getSublistValue(options: GetSublistValueOptions): string;
    getValue(options: IDOptions): string | string[];
    helpText: string;
    id: string;
    label: string;
    stepNumber: number;
}

export interface Button {
    isDisabled: boolean;
    isHidden: boolean;
    label: string;
}

export interface Field {
    addSelectOption(options: AddSelectOptionOptions): void;
    getSelectOptions(options: GetSelectOptionsOpts): Object[];
    setHelpText(options: SetHelpTextOptions): Field;
    updateDisplaySize(options: UpdateDisplaySizeOptions): Field;
    updateDisplayType(options: UpdateDisplayTypeOptions): Field;
    updateBreakType(options: UpdateBreakTypeOptions): Field;
    updateLayoutType(options: UpdateLayoutTypeOptions): Field;
    alias: string;
    // breakType: string; // no longer documented as of 2016.1
    defaultValue: string;
    // displaySize: number; // no longer documented as of 2016.1
    // displayType: string;  // no longer documented as of 2016.1
    id: string;
    isMandatory: boolean;
    label: string;
    // layoutType: string; // This isn't a thing anymore, as of 2016.1
    linkText: string;
    maxLength: number;
    padding: number;
    richTextHeight: number;
    richTextWidth: number;
    type: FieldType;
}

export interface FieldGroup {
    isBorderHidden: boolean;
    isCollapsible: boolean;
    isCollapsed: boolean;
    isSingleColumn: boolean;
    label: string;
}

export interface BaseForm {
    addField(options: AddFieldOptions): Field;
    clientScriptFileId: number;
    title: string;
}

export interface Form extends BaseForm {
    addButton(options: AddButtonOptions): Button;
    addCredentialField(options: AddCredentialFieldOptions): Field;
    addFieldGroup(options: AddFieldGroupOptions): FieldGroup;
    addPageLink(options: AddPageLinkOptions): void;
    addResetButton(options: AddResetButtonOptions): Button;
    addSublist(options: AddSublistOptions): Sublist;
    addSubmitButton(options?: AddSubmitButtonOptions): void;
    addSubtab(options: AddSubtabOptions): Tab;
    addTab(options: AddFieldGroupOptions): Tab;
    getButton(options: IDOptions): Button;
    getField(options: IDOptions): Field;
    getSublist(options: IDOptions): Sublist;
    getSubtab(options: IDOptions): Tab;
    getTabs(): Tab[];
    insertField(options: InsertFieldOptions): Field;
    insertSublist(options: InsertSublistOptions): Sublist;
    insertSubtab(options: InsertSubtabOptions): Tab;
    insertTab(options: InsertSubtabOptions): Tab;
    setDefaultValues(options: SetDefaultValuesOptions): void;
    removeButton(options: IDOptions): void;
}

export interface Sublist {
    addButton(options: AddButtonOptions): Button;
    addField(options: AddFieldOptions): Field;
    addMarkAllButtons(): Button;
    addRefreshButton(): Button;
    getSublistValue(options: SublistGetSublistValueOptions): string;
    setSublistValue(options: SublistSetSublistValueOptions): string;
    displayType: SublistDisplayType;
    helpText: string;
    label: string;
    lineCount: number;
    totallingFieldId: string;
    uniqueFieldId: string;
}

export interface Tab {
    helpText: string;
    label: string;
}

export function createAssistant(options: CreateAssistantOptions): Assistant;
/**
 * Creates a form object.
 */
export function createForm(options: CreateAssistantOptions): Form;
export enum AssistantSubmitAction {
    BACK,
    CANCEL,
    FINISH,
    JUMP,
    NEXT,
}

export enum FieldBreakType {
    NONE,
    STARTCOL,
    STARTROW,
}

export enum FieldDisplayType {
    DISABLED,
    ENTRY,
    HIDDEN,
    INLINE,
    NORMAL,
    READONLY,
}

export enum FieldLayoutType {
    ENDROW,
    NORMAL,
    MIDROW,
    OUTSIDE,
    OUTSIDEBELOW,
    OUTSIDEABOVE,
    STARTROW,
}

export enum FieldType {
    CHECKBOX,
    CURRENCY,
    DATE,
    DATETIMETZ,
    EMAIL,
    FILE,
    FLOAT,
    HELP,
    INLINEHTML,
    INTEGER,
    IMAGE,
    LABEL,
    LONGTEXT,
    MULTISELECT,
    PASSPORT,
    PERCENT,
    PHONE,
    SELECT,
    RADIO,
    RICHTEXT,
    TEXT,
    TEXTAREA,
    TIMEOFDAY,
    URL,
}

export enum FormPageLinkType {
    BREADCRUMB,
    CROSSLINK,
}

export enum LayoutJustification {
    CENTER,
    LEFT,
    RIGHT,
}

export enum ListStyle {
    GRID,
    REPORT,
    PLAIN,
    NORMAL,
}

export enum SublistDisplayType {
    HIDDEN,
    NORMAL,
}

export enum SublistType {
    EDITOR,
    INLINEEDITOR,
    LIST,
    STATICLIST,
}