import{j as r}from"./TransitionGroupContext-9d36972e.js";import{R as y}from"./index-f1f749bf.js";import{e as o}from"./index-a6af7223.js";import{w as d,u as a}from"./index-72884e22.js";import{P as u}from"./index-63a3e378.js";import{r as v}from"./stories-1f769a10.js";import{P as x}from"./papaparse.min-b66e70e7.js";import"./assertThisInitialized-ad1db8e7.js";import"./_commonjsHelpers-042e6b4d.js";import"./isEqual-86613f76.js";import"./_baseForOwn-9b89c4b6.js";import"./index-92073c91.js";import"./uniq-0d482d7b.js";import"./_arrayIncludes-2cfb33ae.js";import"./index-a6c8ef6f.js";import"./index-147ad7aa.js";import"./index-356e4a49.js";import"./index.esm-bf21a293.js";import"./index-bcfaa842.js";import"./index-96c5f47c.js";import"./isNativeReflectConstruct-05c29d01.js";import"./index-ce960f89.js";import"./index-f70ce446.js";import"./zod-575fe4a8.js";import"./Add-be7f5660.js";import"./Button-352c3435.js";import"./userGroups-edff3f7b.js";import"./react-router-19e5b27c.js";import"./index-4d501b15.js";import"./tiny-invariant-dd7d57d2.js";import"./isPlainObject-07477f89.js";import"./debounce-213cd46f.js";import"./iframe-ed7f5a3f.js";import"../sb-preview/runtime.js";const X={title:"LAWD/User Create Property"},n={render:v(()=>{const[s,t]=y.useState({});return r.jsxs(x,{sx:{p:2},children:[r.jsx(u,{mode:"ADD",setOpenPropertyDetailsForm:!0,setQParams:()=>{},openLink:!0,handleSubmit:async e=>{t(e)}}),r.jsx("div",{children:"Form Values"}),r.jsx("div",{"data-testid":"form-values",children:JSON.stringify(s)})]})}),play:async({canvasElement:s,step:t})=>{const e=d(s),i="address 2";await t("Check buttons and icons",async()=>{await o(e.getByText("Save")).toBeInTheDocument()}),await t("Input fields",async()=>{await a.type(e.getByLabelText("Name"),"sample"),await a.type(e.getByLabelText("Address"),i),await a.type(e.getByLabelText("Suburb"),"state x"),await a.type(e.getByLabelText("Postal Code"),"2301")}),await t("Submit form",async()=>{await a.click(e.getByText("Save"));const l=await e.findByTestId("form-values");await o(JSON.parse(l.textContent||"{}")).toMatchObject({__typename:"Project",name:"sample",type:"PROPERTY",address1:i,suburb:"state x",postcode:"2301",electricity:"",sewerage:"",telephone:"",mail:"",internet:"",gas:"",mobileService:"",propertyOrigin:"valuation"})})}};var p,m,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: renderEmbraceUserStory(() => {
    const [data, setData] = React.useState({});
    return <Paper sx={{
      p: 2
    }}>
        <PropertyDetailsForm mode={'ADD'} setOpenPropertyDetailsForm={true} setQParams={() => {}} openLink handleSubmit={async (value: any) => {
        setData(value);
        // alert(JSON.stringify(value, null, 2));
        // createProperty({
        //   ...values,
        // });
        // queryClient.refetchQueries({
        //   queryKey: ['Q_PROPERTY_LIST'],
        // });
        // setOpenPropertyForm(false);
        // await refetchProperty();
      }} />
        <div>Form Values</div>
        <div data-testid="form-values">{JSON.stringify(data)}</div>
      </Paper>;
  }),
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    const address1 = 'address 2';
    await step('Check buttons and icons', async () => {
      await expect(canvas.getByText('Save')).toBeInTheDocument();
    });
    await step('Input fields', async () => {
      await userEvent.type(canvas.getByLabelText('Name'), 'sample');
      await userEvent.type(canvas.getByLabelText('Address'), address1);
      await userEvent.type(canvas.getByLabelText('Suburb'), 'state x');
      await userEvent.type(canvas.getByLabelText('Postal Code'), '2301');
    });
    await step('Submit form', async () => {
      await userEvent.click(canvas.getByText('Save'));
      const formValueDiv = await canvas.findByTestId('form-values');
      await expect(JSON.parse(formValueDiv.textContent || '{}')).toMatchObject({
        __typename: 'Project',
        name: 'sample',
        type: 'PROPERTY',
        address1,
        suburb: 'state x',
        postcode: '2301',
        electricity: '',
        sewerage: '',
        telephone: '',
        mail: '',
        internet: '',
        gas: '',
        mobileService: '',
        propertyOrigin: 'valuation'
      });
    });
  }
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const Z=["Default"];export{n as Default,Z as __namedExportsOrder,X as default};
