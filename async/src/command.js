import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

yargs(hideBin(process.argv))
  .command('new <note>', 'Create a new note', yargs => {
    return yargs.positional('note', {
        describe: 'Note to create',
        type: 'string',
    })
  }, (argv) => {
    console.log(`Creating a new note: ${argv.note}`)
  })
  .demandCommand(1)
  .parse()