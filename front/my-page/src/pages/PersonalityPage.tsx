
import React from 'react'
import { PageContainer } from '@/components/PageRenderer'
import { Paragraph } from '@/components/Paragraph'
import PageData  from '@/data/api/Personality.json'

export const Personality: React.FC<{ title: React.ReactNode }> = ({ title }) => {
  return (
    <PageContainer title={title}>
        {PageData.map(p => (
          <Paragraph key={p.id}>{p.text}</Paragraph>
        ))}

   {/* <Paragraph>We need no Magic paths
                                         To find the land of happiness,
                                         For now has come the time to tell everyone
                                         How much the fairy tales have given us.

                                         And the clocks will not strike twelve tonight,
                                         To turn us back again
                                         From the fairy tale where, as we wish,
                                         This evening we can become anyone.

                                         Let the wizards cast their spells,
                                         And catch the moment by its tail!
                                         Meanwhile in this fairy tale
                                         We must enchant ourselves until the sun sets!
                                         Let the wizards cast their spells
                                         And stop time for just a while!
                                         For new fairy tales
                                         We must sing the song of dreams!

                                         Let the sprites and fairies listen well!
                                         We ask of you only a little:
                                         Just for one night of fairy tales,
                                         Lend us your wings to fly!

                                         Let the wizards cast their spells,
                                         And catch the moment by its tail!
                                         Meanwhile in this fairy tale
                                         We must enchant ourselves until the sun sets!
                                         Let the wizards cast their spells
                                         And stop time for just a while!
                                         For new fairy tales
                                         We must sing the song of dreams!</Paragraph>*/}
    </PageContainer>
  )
}
export default Personality
