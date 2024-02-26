import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

const Input = ({ name, control, label, ...props }) => {

    return (
        <Controller
            name={name}
            control={control}
            render={({
                field: { onChange, value },
                fieldState: { error },
            }) => (
                <>
                    <TextField
                        helperText={error ? error.message : null}
                        size="small"
                        error={!!error}
                        onChange={onChange}
                        value={value}
                        fullWidth
                        label={label}
                        variant="outlined"
                        {...props}
                    />
                </>
            )}
        />
    )
}

export default Input