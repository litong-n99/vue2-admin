declare module 'webpack-theme-color-replacer/client' {
  interface ChangeColorOption {
    newColors: string[];
    changeUrl: (cssUrl: string) => string;
  }

  interface Client {
    varyColor: {
      lighten: (color: string, i: number) => string;
      toNum3: (color: string) => string[];
    };
    changer: {
      changeColor: (
        option: ChangeColorOption,
        promiseConstructor: PromiseConstructor
      ) => Promise<void>;
    };
  }
  const client: Client;
  export default client;
}
