'use strict'
const puppeteer = require('puppeteer');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with supermercados
 */
class SupermercadoController {
  /**
   * Show a list of all supermercados.
   * GET supermercados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new supermercado.
   * GET supermercados/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new supermercado.
   * POST supermercados
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
  }

  /**
   * Display a single supermercado.
   * GET supermercados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing supermercado.
   * GET supermercados/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update supermercado details.
   * PUT or PATCH supermercados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a supermercado with id.
   * DELETE supermercados/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }


  async arroz({ response }) {




    var dataseet = [];
    var fs = require('fs');
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox']
    });

    const page1 = await browser.newPage();

    await page1.setViewport({
      width: 1920,
      height: 1080
    });
    await page1.goto('https://precodahora.ba.gov.br/produtos/', { waitUntil: "networkidle2" });


    await page1.waitFor(5000);
    await page1.click('body > div.row-fluid.bg-white.mb-3 > div > div > div.location-box > button');

    await page1.waitFor(2000);
    await page1.screenshot({ path: 'test01.png' });
    await page1.waitForFunction(
      'document.querySelector("#add-center").innerText.includes("centro do município")'
    );
    await page1.waitFor(4000);
    await page1.click('#add-center');
    await page1.screenshot({ path: 'test02.png' });



    //await page1.waitFor(6000);
    await page1.waitFor(2000);
    await page1.screenshot({ path: 'test022.png' });
    await page1.focus('#modal-regions > div > div > div.modal-body > input');
    await page1.click('#modal-regions > div > div > div.modal-body > input');
    await page1.waitForFunction(
      'document.querySelector("#modal-regions > div > div > div.modal-body").innerText.includes("Digite sua cidade ou selecione")'
    );

    await page1.$eval('input[name=municipio]', el => el.value = 'fei');

    await page1.waitFor(6000);

    await page1.$eval('input[name=municipio]', el => el.value = el.value + 'ra d');

    await page1.waitFor(6000);

    await page1.$eval('input[name=municipio]', el => el.value = el.value + 'e santa');

    await page1.waitFor(2000);


    await page1.$eval('input[name=municipio]', el => el.value = el.value + 'na');
    await page1.keyboard.press("Enter");


    await page1.waitForFunction(
      'document.querySelector("#sugerir-municipios").innerText.includes("FEIRA DE SANTANA")'
    )
    console.log("aqui pesquisar 4");

    await page1.click('#sugerir-municipios > ul > li.set-mun');
    await page1.screenshot({ path: 'test03.png' });

    await page1.screenshot({ path: 'test04.png' });


    await page1.waitFor(2000);
    console.log("aqui pesquisar 5");

    await page1.screenshot({ path: 'test03.png' });
    await page1.click('#aplicar');

    await page1.screenshot({ path: 'test04.png' });

    console.log("aqui pesquisar 2");
    await page1.$eval('input[id=top-sbar]', el => el.value = el.value + '7896038321056');

    await page1.click('body > header > div > div.top-sbar-produtos > div > fieldset > button.btn-top-sbar');

    /*console.log("aqui pesquisar 1");
    await page1.click('body > div.row-fluid.bg-white.mb-3 > div > div > div.gas-box > button');
    await page1.screenshot({ path: 'test1.png' });


    await page1.waitFor(5000);
    await page1.waitForFunction(
      'document.querySelector("#modal-combustiveis > div > div > div.modal-body").innerText.includes("Escolha o tipo de combustível")'
    )
    await page1.evaluate(() => {
      document.querySelector("#lista-combustivel").value = "GNV";
    })
    await page1.screenshot({ path: 'test2.png' });

    console.log("aqui pesquisar");


    console.log("aqui UP 1222");
    await page1.waitFor(5000);
    await page1.waitForFunction(
      'document.querySelector("#modal-combustiveis > div > div > div.modal-body").innerText.includes("Escolha o tipo de combustível")'
    )
    // await page1.screenshot({ path: 'test3.png' });
    await page1.waitFor(2000);
    await page1.click('#sel-combustivel');

    await page1.screenshot({ path: 'test4.png' });*/

    // await page1.waitFor(5000);
    console.log("aqui UP 1");
    await page1.waitFor(10000);
    await page1.click('#updateResults');

    await page1.waitFor(5000)
    console.log("aqui1");
    await page1.screenshot({ path: 'test5.png' });
    var data = await page1.evaluate(() => {



      let array1 = [];

      var contadorArray = 5;
      for (var i = 2; i <= 26; i++) {

        let p = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2").innerText;


        let contato = null;
        let nome = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(1) > strong").innerText;

        let preco = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(2)").innerText;
        let status = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(3)").innerText;


        let posto = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(4)").innerText;
        let endereco = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(5)").innerText;
        //let contato = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(7)").innerText;
        var test = preco.split(" ");
        if (test[0] == "De") {
          preco = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(3)").innerText;
          status = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(4)").innerText;


          posto = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(5)").innerText;
          endereco = document.querySelector("#nav-lista > div:nth-child(" + i + ") > div.flex-item2 > div:nth-child(6)").innerText;
        }


        var x = "ARROZ TIO URBANO 1 KG" + "\n" + preco + "\n" + status.substr(1, status.length - 1) + "\n" + posto.substr(1, posto.length - 1) + "\n" + endereco.substr(1, endereco.length - 1) + "\n" + contato + "\n" + "null";

        array1.push(x);

      }


      var datas = [];
      for (var i = 0; i < array1.length; i++) {
        //console.log(t[i]);
        var agora = array1[i].split('\n');

        //console.log(JSON.stringify(agora[7]));
        datas.push({
          produto: agora[0],
          preco: agora[1],
          status: agora[2],
          supermercado: agora[3],
          endereco: agora[4],
          contato: agora[6],
          cidade: "Feira de Santana"

        });




      }

      return datas;

      // return array1;
    });
 
    for (var i = 0; i < Object.keys(data).length; i++) {
      console.log(data[i]);
    }
      
      
      /*var dados = [];
      var dadosCombustivel = [];

      if (data[i].posto == null) {
        dados.push({
          'nome': "Não tem",
          'endereco': data[i].endereco,
          'contato': data[i].contato,
          'status': data[i].status,
          'cidade': "Salvador"


        });
      } else {
        dados.push({
          'nome': data[i].posto,
          'endereco': data[i].endereco,
          'contato': data[i].contato,
          'status': data[i].status,
          'cidade': "Salvador"


        });
      }

      var posto = await Posto.query().where('endereco', '=', data[i].endereco).first();


      if (!posto) {
        var posto1 = await Posto.create(...dados);

        dadosCombustivel.push({
          'valor': data[i].preco,
          'tipo': data[i].combustivel,
          'posto_id': posto1.id

        });

        var combustivel = await Combustivel.create(...dadosCombustivel);
        var historico = await Historico.create(...dadosCombustivel);
      } else {
        //console.log('1');
        var combustivel1 = await Combustivel.query().where('posto_id', posto.id).where('tipo', '=', data[i].combustivel).first();
        dadosCombustivel.push({
          'valor': data[i].preco,
          'tipo': data[i].combustivel,
          'posto_id': posto.id

        });
        if (combustivel1) {
          var current_time = moment().format('DD-MM-YYYY HH:mm:ss');
          combustivel1.updated_at = current_time;
          combustivel1.valor = data[i].preco;
          combustivel1.save();
          var historico = await Historico.create(...dadosCombustivel);
        } else {

          var combustivel = await Combustivel.create(...dadosCombustivel);
          var historico = await Historico.create(...dadosCombustivel);
        }

      }

    }
    /* const devtoListTrimmed = datas.filter(n => n != undefined)
         fs.writeFile("dieselfsa.json",
             JSON.stringify(devtoListTrimmed, null, 4),
             (err) => console.log('File successfully written!'))*/




    /*data.then(t => {

        // console.log("1" + t.length);
        


        // browser.close();
    });*/

    //  await browser.close();

    // console.log();

    await page1.close();
    await browser.close();






  }

}

module.exports = SupermercadoController
