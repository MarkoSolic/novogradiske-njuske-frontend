class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  }

  pozdrav = () => {
    const message = this.createChatBotMessage(
      "Pozdrav, ako vas zanima nešto od udruzi odaberite gore navedna pitanja"
    );
    this.addMessageToState(message);
  };
  dovidjenja = () => {
    const message = this.createChatBotMessage("Doviđenja!");
    this.addMessageToState(message);
  };

  onama = () => {
    const message = this.createChatBotMessage(
      "Novogradiške njuške je udruga koja poglavito djeluje na novogradiškom području. Djelovanje udruge usmjereno je na spašavanje, zbrinjavanje i liječenje napuštenih, zlostavljanih i bolesnih životinja, tj. najčešće kućnih ljubimaca pasa i mačaka."
    );
    this.addMessageToState(message);
  };

  pomoc = () => {
    const message = this.createChatBotMessage(
      "Pomoći se može na razne načine: primanjem životinja u svoj dom na privremeni smještaj do udomljavanja, donacija u novcu, donacija u hrani, aktivnim nalaženjem doma i sve što može pridonijeti za dobrobit životinja."
    );
    this.addMessageToState(message);
  };
  mjesto = () => {
    const message = this.createChatBotMessage(
      "Nalazimo se u ulici Ivana Gorana Kovačića 82 Nova Gradiška"
    );
    this.addMessageToState(message);
  };

  udomljavanje = () => {
    const message = this.createChatBotMessage(
      "Želite udomiti ljubimca? Javite se udruzi na jedan od dolje ponuđenih kontakata."
    );
    this.addMessageToState(message);
  };

  neispravno = () => {
    const message = this.createChatBotMessage(
      "Neispravan unos riječi. Pokušajte ponovno."
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
