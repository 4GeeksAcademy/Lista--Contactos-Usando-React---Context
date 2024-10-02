const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactos: []
		},
		actions: {
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			
			loadSomeData: () => {
				//cargar mas datos
			},
			
			changeColor: (index, color) => {
				const store = getStore();
				const demo = store.demo.map((elm, i) => i === index ? { ...elm, background: color } : elm);
				setStore({ demo });
			},

			fetchContactos: async () => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/kevin1202/contacts");
					
					if (response.status === 404) {
						await getActions().createUser();
						await getActions().fetchContactos();
						return;
					}

					if (!response.ok) throw new Error("Error en contacto");

					const data = await response.json();
					setStore({ contactos: data.contacts });
				} catch (error) {
					console.error(error);
				}
			},

			addContact: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/kevin1202/contacts", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: { "Content-Type": "application/json" }
					});

					if (!response.ok) throw new Error("Error al crear contacto");

					const data = await response.json();
					setStore({ contactos: [...getStore().contactos, data] });
				} catch (error) {
					console.error(error);
				}
			},
			
			updateContact: async (updatedContact) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/kevin1202/contacts/${updatedContact.id}`, {
						method: "PUT",
						headers: { "Content-Type": "application/json" },
						body: JSON.stringify(updatedContact)
					});

					if (response.ok) getActions().fetchContactos();
				} catch (error) {
					console.error(error);
				}
			},

			deleteContact: async (id) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/kevin1202/contacts/${id}`, {
						method: "DELETE"
					});

					if (!response.ok) throw new Error("No se pudo eliminar contacto");

					const contactDelete = getStore().contactos.filter(contact => contact.id !== id);
					setStore({ contactos: contactDelete });
				} catch (error) {
					console.error(error);
				}
			},

			createUser: async (contact) => {
				try {
					const response = await fetch("https://playground.4geeks.com/contact/agendas/kevin1202", {
						method: "POST",
						body: JSON.stringify(contact),
						headers: { "Content-Type": "application/json" }
					});

					if (!response.ok) throw new Error("Error al crear usuario");
				} catch (error) {
					console.error(error);
				}
			}
		}
	};
};

export default getState;
